import React from "react";
import resume from "../Resume/resume.pdf";
export default function ResumeBtn({ children }) {
  function OpenTab() {
    window.open(
      `https://drive.google.com/file/d/1nP4KlF_gIlH7TNM9eqmMQSR-MFDwKKXY/view?usp=drive_link`
    );
  }
  return (
    <div>
      <div>
        <button
          className="btn"
          style={{ width: "122px" }}
          onMouseEnter={(e) => (e.target.style.width = "128px")}
          onClick={OpenTab}
        >
          {children}
        </button>
      </div>
    </div>
  );
}
