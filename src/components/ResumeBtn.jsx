import React from "react";
import resume from "../Resume/resume.pdf"
export default function ResumeBtn({ children }) {
  return (
    <div>
      <div>
      <a href={resume} download="Samay-Dhawale-Resume" style={{textDecoration:"none"}}>
      <button id="btn">
      {children}
        </button>
    </a>
      </div>
    </div>
  );
}
