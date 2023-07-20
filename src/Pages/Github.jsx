import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Github() {
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
      </div>
    </div>
  )
}
