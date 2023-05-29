import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "aditya" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getRecipeStore = (win) => win.store.getState().recipeReducer;

data.forEach(({ submission_link: url, id }) => {
  describe("Recipe App", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    // Check for basic redux store

    it(`Check Initial Redux Store Structure for Authentication`, () => {
      cy.window()
        .then(getAuthStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for recipe`, () => {
      cy.window()
        .then(getRecipeStore)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          recipe: [],
        })
        .then(() => {
          acc_score += 1;
        });
    });

    // Check for homepage UI and store updation

    it(`Get request should be made for recipe when home page loads`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/recipe**").as("request");
      cy.wait("@request").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/recipe/);
      });
      cy.get("@request").its("response.body").its("length").should("be.eq", 30);
      cy.then(() => (acc_score += 1));
    });

    it(`isLoading should update accordingly while making request`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/recipe**").as("request");

      cy.window().then(getRecipeStore).its("isLoading").should("eq", false);

      cy.wait("@request");
      cy.wait(1000).then(() => {
        cy.window().then(getRecipeStore).its("isLoading").should("eq", false);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`Recipe state in store should update when get request made on homepage`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/recipe**").as("request");

      cy.window().then(getRecipeStore).its("recipe").should("have.length", 0);

      cy.wait("@request");
      cy.wait(1000);

      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .its("length")
        .should("eq", 30);
      cy.then(() => (acc_score += 2));
    });

    it(`All recipes should be displayed on home page`, () => {
      cy.get("[data-testid=recipe-list]")
        .children()
        .its("length")
        .should("eq", 30);
      cy.get(".recipe-card").its("length").should("eq", 30);
      cy.get(".recipe-name").eq(1).should("have.text", "Chicken Fried Rice");
      cy.get(".recipe-price").eq(4).should("have.text", 114);
      cy.get(".recipe-type").eq(5).should("have.text", "Type: non-veg");
      cy.then(() => (acc_score += 2));
    });

    it(`All non-veg items type should be dispalyed in red colour`, () => {
      cy.get(".recipe-type")
        .eq(5)
        .should("have.css", "color", "rgb(255, 0, 0)");
      cy.then(() => (acc_score += 1));
    });

    it(`All veg items type should be dispalyed in Green colour`, () => {
      cy.get(".recipe-type")
        .eq(0)
        .should("have.css", "color", "rgb(0, 128, 0)");
      cy.then(() => (acc_score += 1));
    });

    // // Check for Authentication

    it(`On Login the store authReducer state should update accordingly`, () => {
      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");

      cy.intercept("POST", "**/api/login").as("login");

      cy.visit(`${url}login`);
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.then(() => (acc_score += 2));
    });

    it("user is redirected to login page while visiting /recipe/:id, without authentication", () => {
      cy.visit(`${url}recipe/5`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });
      cy.then(() => (acc_score += 1));
    });

    it("user is redirected to login page while visiting /recipe/:id, without authentication and should be redirected back to /recipe.:id after login", () => {
      cy.visit(`${url}recipe/5`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();
      cy.wait(1000);
      cy.url().should("eq", `${url}recipe/5`);
      cy.visit(`${url}recipe/8`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });
      cy.get("[data-testid=user-email]").type("eve.holt@reqres.in");
      cy.get("[data-testid=user-password]").type("cityslicka");
      cy.get("[data-testid=user-login]").click();
      cy.wait(1000);
      cy.url().should("eq", `${url}recipe/8`);
      cy.then(() => (acc_score += 2));
    });

    // // Check for filtering

    it(`On checking filter by category url should be updated accordingly`, () => {
      cy.get("[data-testid=recipe-indian]").click();
      cy.url().should("match", /category=indian/);
      cy.get("[data-testid=recipe-chinese]").click();
      cy.url().should("match", /category=chinese/);
      cy.url().should("match", /category=indian/);
      cy.get("[data-testid=recipe-thai]").click();
      cy.url().should("match", /category=thai/);
      cy.url().should("match", /category=indian/);
      cy.url().should("match", /category=chinese/);
      cy.get("[data-testid=recipe-indian]").click();
      cy.url().should("match", /category=thai/);
      cy.url().should("match", /category=chinese/);
      cy.get("[data-testid=recipe-italian]").click();
      cy.url().should("match", /category=thai/);
      cy.url().should("match", /category=italian/);
      cy.url().should("match", /category=chinese/);

      cy.then(() => (acc_score += 2));
    });

    it(`On checking filter by veg/non-veg url should be updated accordingly`, () => {
      cy.get("[data-testid=recipe-veg]").click();
      cy.url().should("match", /type=veg/);
      cy.get("[data-testid=recipe-non-veg]").click();
      cy.url().should("match", /type=veg/);
      cy.url().should("match", /type=non-veg/);
      cy.get("[data-testid=recipe-veg]").click();
      cy.url().should("match", /type=non-veg/);
      cy.then(() => (acc_score += 2));
    });

    it(`On visiiting url with initial params the checkboxes should be checked accordingly`, () => {
      cy.visit(`${url}?category=indian&category=chinese&type=veg`);
      cy.get("[data-testid=recipe-indian]").should("be.checked");
      cy.get("[data-testid=recipe-chinese]").should("be.checked");
      cy.get("[data-testid=recipe-veg]").should("be.checked");
      cy.visit(`${url}?category=italian&type=non-veg`);
      cy.get("[data-testid=recipe-italian]").should("be.checked");
      cy.get("[data-testid=recipe-non-veg]").should("be.checked");
      cy.then(() => (acc_score += 2));
    });

    it(`On filtering by category the data in redux store should also be filtered accordingly`, () => {
      cy.get("[data-testid=recipe-indian]").click();
      cy.wait(1000);
      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .its("length")
        .should("eq", 7);

      cy.get("[data-testid=recipe-chinese]").click();
      cy.wait(1000);

      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .its("length")
        .should("eq", 14);

      cy.then(() => (acc_score += 1)); //1
    });

    it(`On filtering by type the data in redux store should also be filtered accordingly`, () => {
      cy.get("[data-testid=recipe-veg]").click();
      cy.wait(1000);
      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .its("length")
        .should("eq", 18);

      cy.get("[data-testid=recipe-veg]").click();
      cy.get("[data-testid=recipe-non-veg]").click();
      cy.wait(1000);

      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .its("length")
        .should("eq", 12);

      cy.then(() => (acc_score += 1));
    });

    it(`On filtering by category the UI on home page should update accordingly`, () => {
      cy.get("[data-testid=recipe-indian]").click();
      cy.wait(2000);
      cy.get(".recipe-category").then((res) => {
        for (let el of res) {
          expect(el).to.contain("Category: indian");
        }
      });
      cy.get("[data-testid=recipe-chinese]").click();
      cy.get("[data-testid=recipe-indian]").click();
      cy.wait(2000);
      cy.get(".recipe-category").then((res) => {
        for (let el of res) {
          expect(el).to.contain("Category: chinese");
        }
      });
      cy.then(() => (acc_score += 1));
    });

    // // Check for Sorting

    it(`On sorting recipes ascending data should render in UI accordingly`, () => {
      cy.get("[data-testid=recipe-sort-asc]").click();
      cy.wait(2000);
      cy.get(".recipe-price").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (+res[i - 1].childNodes[0].data > +res[i].childNodes[0].data) {
            sort = false;
            break;
          }
        }
        expect(sort).to.eq(true);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting recipes ascending data should update in store accordingly`, () => {
      cy.get("[data-testid=recipe-sort-asc]").click();
      cy.wait(2000);
      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .then((res) => {
          let sort = true;
          for (let i = 1; i < res.length; i++) {
            if (+res[i - 1].price > +res[i].price) {
              sort = false;
              break;
            }
          }
          expect(sort).to.eq(true);
        });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting recipes descending data should render in UI accordingly`, () => {
      cy.get("[data-testid=recipe-sort-desc]").click();
      cy.wait(2000);
      cy.get(".recipe-price").then((res) => {
        let sort = true;
        for (let i = 1; i < res.length; i++) {
          if (+res[i - 1].childNodes[0].data < +res[i].childNodes[0].data) {
            sort = false;
            break;
          }
        }
        expect(sort).to.eq(true);
      });
      cy.then(() => (acc_score += 1));
    });

    it(`On sorting recipes in descending data should update in store accordingly`, () => {
      cy.get("[data-testid=recipe-sort-desc]").click();
      cy.wait(2000);
      cy.window()
        .then(getRecipeStore)
        .its("recipe")
        .then((res) => {
          let sort = true;
          for (let i = 1; i < res.length; i++) {
            if (+res[i - 1].price < +res[i].price) {
              sort = false;
              break;
            }
          }
          expect(sort).to.eq(true);
        });
      cy.then(() => (acc_score += 1));
    });

    it("Filtering and sorting should work together", () => {
      cy.get("[data-testid=recipe-indian]").click();
      cy.get("[data-testid=recipe-thai]").click();
      cy.get("[data-testid=recipe-veg]").click();
      cy.wait(2000);

      cy.url().should("match", /type=veg/);
      cy.url().should("match", /category=indian/);
      cy.url().should("match", /category=thai/);

      cy.get("[data-testid=recipe-list]")
        .children()
        .its("length")
        .should("be.eq", 7);
      cy.then(() => (acc_score += 1));
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
