import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GitHubCalendar from 'react-github-calendar';

export default function Github() {
  const username = "samaydhawale000";
  const theme = {
    light: ["hsl(0, 0%, 92%)", "rebeccapurple"],
    dark: ["hsl(0, 0%, 22%)", "#007fda"]         
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

        <div>
            <img src="https://github-readme-streak-stats.herokuapp.com?user=samaydhawale000&theme=transparent" alt="img" />
            <img src="https://github-readme-stats.vercel.app/api?username=samaydhawale000&show_icons=true&theme=transparent" alt="img" />
            <img src="https://github-readme-stats.vercel.app/api?username=samaydhawale000&show_icons=true&theme=transparent" alt="img" />
            <GitHubCalendar username={username} theme={theme} />
        </div>
      </div>
    </div>
  )
}
