## React Redux Recipe App

### Maximum Marks: 30

```
✅ Able to make submission: - 1 Mark
✅ Check Initial Redux Store Structure for Authentication: - 1 Mark
✅ Check Initial Redux Store Structure for recipe: - 1 Mark
✅ Get request should be made for recipe when home page loads: - 1 Mark
✅ isLoading should update accordingly while making request: - 1 Mark
✅ Recipe state in store should update when get request made on homepage: - 2 Marks
✅ All recipes should be displayed on home page: - 2 Mark
✅ All non-veg items type should be dispalyed in red colour: - 1 Mark
✅ All veg items type should be dispalyed in Green colour: - 1 Mark
✅ On Login the store authReducer state should update accordingly: - 2 Marks
✅ user is redirected to login page while visiting /recipe/:id, without authentication: - 1 Marks
✅ user is redirected to login page while visiting /recipe/:id, without authentication and should be redirected back to /recipe.:id after login: - 2 Marks
✅ On checking filter by category url should be updated accordingly: - 2 Marks
✅ On checking filter by veg/non-veg url should be updated accordingly: - 2 Marks
✅ On visiiting url with initial params the checkboxes should be checked accordingly: - 2 Marks
✅ On filtering by category the data in redux store should also be filtered accordingly: - 1 Mark
✅ On filtering by type the data in redux store should also be filtered accordingly: - 1 Mark
✅ On filtering the the UI on home page should update accordingly: - 1 Mark
✅ On sorting recipes ascending data should render in UI accordingly: - 1 Mark
✅ On sorting recipes ascending data should update in store accordingly: - 1 Marks
✅ On sorting recipes descending data should render in UI accordingly: - 1 Mark
✅ On sorting recipes descending data should update in store accordingly: - 1 Mark
✅ Filtering and sorting should work together: - 1 Marks
```

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── PrivateRoute.jsx
│    └── RecipeCard.jsx
│    └── RecipeList.jsx
│    └── SideBar.jsx
├── >Pages
│    └── HomePage.jsx (Route:- "/")
│    └── LogIn.jsx (Route:- "/login")
│    └── RecipeDetail.jsx (Private Route:- "/recipe/:id")
│    └── MainRoutes.jsx (Add all Routes here)
└── >Redux
│    └── >AuthReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >RecipeReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── store.js
└── App.js
```

## Problem Statement

Create a recipe app where user can see a list of different recipes. They can also filter based on category and type. Allow sorting of recipes based on price.

### Redux

- Create redux store, and use thunk middleware
- Create separate reducer as `authReducer` and `recipeReducer` for authentication and recipes respectively.
- Use combineReducer
- All the API request will be made in `action.js`
- Initial state for `authReducer` should be

```
{
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
```

- Initial state for `recipeReducer` should be

```
{
  isLoading: false,
  isError: false,
  recipe: [],
}
```

### RecipeList

- Complete the `RecipeList` component.
- Update the store with the recipe data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of recipes in grid format inside div with `data-testid = "recipe-list"`.
- Use the `RecipeCard` component for showing recipe details, with the below constraints
- Every recipe card will have class `recipe-card`

```
- Show image in image tag with class `recipe-image`
- Show name with class `recipe-name`
- Show category with class `recipe-category`
- Show type with class `recipe-type`
- Show price with class `recipe-price`
*Do not add any extra text to the price tag*
- Show `View Ingredients` button with class `recipe-detail`
*Refer Image provided for more clarity*

```

- If the item is non-veg type should be in `RED` color and if veg it should be in `GREEN` color.

<img width="1726" alt="Screenshot 2023-02-10 at 11 52 08 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-26/Screenshot%202023-05-26%20at%2010.46.50%20AM_969551.png">

### Filtering

**Sidebar UI is provided you have to write the logic**

- While checking or unchecking the filtering and sorting checkboxes the url should update accordingly
- Example url:-

- Filtering :-

```
- http://localhost:3000/?category=indian
- http://localhost:3000/?category=indian&category=chinese
- http://localhost:3000/?category=indian&category=chinese&type=veg
```

- Sorting :-

```
- http://localhost:3000/?order=asc
- http://localhost:3000/?order=desc
```

- Sorting and filtering together

```
http://localhost:3000/?category=indian&type=veg&order=asc
```

- Reverse should also be true, i.e. the checkboxes should be checked as per the initial params in the url
- Update the redux store as well with the sorted and filtered data
- The sorted and filtered data should be reflected on DOM as well
- The soring and filtering should work together

### Step:- 4 Authentication

- Use `reqres.in` for login functionality
- Complete the `login` page.
- On successfull login update the redux store accordingly with isAuth and token.
- If the user is not authenticated and tries to visit `/recipe/:id`, redirect him to `login` page
- On successfull log-in he should be redirected back to `/recipe/:id`, where he was trying to visit, not any other page.
- Complete the `RecipeDetail` page and show the recipe detail with following
- User can visit the `RecipeDetail` page by clicking on the button provided.

### RecipeDetail

**Display the id of that item in h1 tag with class `recipe-id`**

```
- Show image in image tag with class `recipe-image`
- Show name with class `recipe-name`
- Show category with class `recipe-category`
- Show type with class `recipe-type`
- Show price with class `recipe-price`
- Show recipe ingredient items with class `recipe-ingredient`
```

- Refer image for more clarity

<img width="1726" alt="Screenshot 2023-02-10 at 11 52 08 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-26/Screenshot%202023-05-26%20at%2010.47.05%20AM_461819.png">

<img width="1726" alt="Screenshot 2023-02-10 at 11 52 08 PM" src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-05-26/Screenshot%202023-05-26%20at%203.58.03%20PM_780280.png">

### General Instructions:

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
