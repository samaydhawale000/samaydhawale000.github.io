import React from "react";
import samayImage2 from "../images/samayImage2.png";
import "./Pages.css";
import background from "../images/background.jpg";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  faPhoneVolume,
  faEnvelope,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResumeBtn from "../components/ResumeBtn";
import resume from "../Resume/resume.pdf"

function Home() {
  const [phone, setPhone] = useState(false);
  const [mail, setMail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("9921695204");
    setPhone(true);
  };

  const handleCopyMail = () => {
    // Copy the desired text to the clipboard
    navigator.clipboard.writeText("samaydhawale1@gmail.com");
    setMail(true);
  };

  useEffect(() => {
    let timeoutId;

    if (phone) {
      timeoutId = setTimeout(() => {
        setPhone(false);
      }, 1500);
    }
    if (mail) {
      timeoutId = setTimeout(() => {
        setMail(false);
      }, 1500);
    }

    return () => clearTimeout(timeoutId);
  }, [mail, phone]);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "700px",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${background})`,
          paddingTop: "70px",
          boxSizing: "border-box",
        }}
        id="home"
        class="nav-link home"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "80px 3% 50px 6%",
          }}
        >
          <div style={{ marginTop: "30px" }}>
            <h1>Hello👋, My name is</h1>
            <h1 id="user-detail-name">Samay Subodh Dhawale</h1>
            <div
              style={{
                display: "flex",
                width: "80%",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <h1>I am a</h1>
              <h1 data-text="Full Stack Web Developer" id="designation">
                Full Stack Web Developer
              </h1>
            </div>

            <div id="buttons">
              <div>
                <a
                  href={resume}
                  download="Samay-Dhawale-Resume"
                  style={{ textDecoration: "none" }}
                  id="resume-link-2"
                >
                  <ResumeBtn id="resume-button-2">
                    Resume <FontAwesomeIcon icon={faFileArrowDown} />
                  </ResumeBtn>
                </a>
              </div>
              <div>
                <Link to="https://github.com/samaydhawale000" target="_blank">
                  <Button
                    id="contact-github"
                    icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
                  />{" "}
                </Link>
              </div>
              <div>
                <Link
                  to="https://www.linkedin.com/in/samay-dhawale-a7a793221/"
                  target="_blank"
                >
                  {" "}
                  <Button
                    id="contact-linkedin"
                    icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />}
                  />
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
              }}
            >
              <div className="copyBtnDiv" style={{ width: "42%" }}>
                <p id="contact-phone">
                  <FontAwesomeIcon icon={faPhoneVolume} size="sm" /> 9921695204
                </p>
                <button
                  onClick={() => {
                    handleCopyPhone();
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} size="sm" />{" "}
                  {phone ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="copyBtnDiv">
                <p id="contact-email">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />{" "}
                  samaydhawale1@gmail.com
                </p>
                <button
                  onClick={() => {
                    handleCopyMail();
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} size="sm" />{" "}
                  {mail ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
          <img className="home-img" src={samayImage2} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
