import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  const username = "samaydhawale000";
  const theme = {
    light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
    dark: ["#002036", "#0093fc"],
  };

  GitHubCalendar("#github-calendar", username, { theme });
  return (
    <div>
      <div
        style={{
          padding: "60px 6% 100px 6%",
          boxSizing: "border-box",
        }}
        class="nav-link skills"
        id="github"
      >
        <h1
          style={{
            fontSize: "38px",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <FontAwesomeIcon icon={faGithub} size="sm" color="#007fda" />
          {"  "}
          Github Statistics
        </h1>

        <div className="github-calendar-container">
            <GitHubCalendar
              id="github-stats-card"
              username={username}
              theme={theme}
            />
          </div>
        <div className="githubDiv">

          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=samaydhawale000&theme=transparent"
            alt="img"
            style={{width:"100%"}}
          />
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=samaydhawale000&show_icons=true&theme=transparent"
            alt="img"
            style={{width:"96%"}}
          />
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=samaydhawale000&layout=compact&theme=transparent"
            alt="img"
            style={{width:"86%"}}
          />
        </div>
      </div>
    </div>
  );
}
