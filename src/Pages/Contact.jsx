import React, { useEffect, useRef, useState } from "react";
import contactImg from "../images/contactImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faFileArrowDown,
  faEnvelope,
  faCopy,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/Button";
import ResumeBtn from "../components/ResumeBtn";
import resume from "../Resume/resume.pdf";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'

export default function Contact() {
  const [phone, setPhone] = useState(false);
  const [mail, setMail] = useState(false);
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const form = useRef();

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

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0122auk",
        "template_17akjuz",
        form.current,
        "plZjZFpcNGOUy8NR4"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text)
          Swal.fire(
            `Hey ${name}`,
            `Your email sent successfully!`,
            'success'
          )
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div
        style={{
          background: "#001422",
          padding: "60px 8% 100px 8%",
          boxSizing: "border-box",
        }}
        class="nav-link contact"
      >
        <h1 className='pagesHeading'>
          <FontAwesomeIcon icon={faPhoneVolume} size="sm" color="#007fda" />{" "}
          Contact Me
        </h1>

        <div className="contactDiv">
          <img src={contactImg} alt="image" />
          <div>
            <h2>Feel free to connect with me</h2>
            <form ref={form} onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input type="text" placeholder="Email" name="email" />
              <input type="Text" placeholder="Phone Number" name="number" />
              <input
                type="text"
                placeholder="Write your Massage"
                name="message"
              />
              <div
                style={{
                  height: "40px",
                  marginBottom: "40px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Button
                  text={"Send"}
                  icon={<FontAwesomeIcon size="sm" icon={faPaperPlane} />}
                />
              </div>
            </form>
            <div
              className="contactCopybtn"
              style={{width:"100%"}}
            >
              <div className="copyBtnDiv" style={{ width: "220px", marginBottom:"20px" }}>
                <p id="contact-phone">
                  <FontAwesomeIcon icon={faPhoneVolume} size="sm" /> 9921695204
                </p>
                <button
                className="copybtntextcss"
                  onClick={() => {
                    handleCopyPhone();
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} size="sm" />{" "}
                  {phone ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="copyBtnDiv" >
                <p id="contact-email">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />{" "}
                  samaydhawale1@gmail.com
                </p>
                <button
                className="copybtntextcss"
                  onClick={() => {
                    handleCopyMail();
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} size="sm" />{" "}
                  {mail ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div id="buttons" style={{ marginLeft: "-2px" }}>
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
                <Link
                  id="contact-github"
                  to="https://github.com/samaydhawale000"
                  target="_blank"
                >
                  <Button
                    icon={<FontAwesomeIcon icon={faGithub} size="lg" />}
                  />{" "}
                </Link>
              </div>
              <div>
                <Link
                  to="https://www.linkedin.com/in/samay-dhawale-a7a793221/"
                  target="_blank"
                  id="contact-linkedin"
                >
                  {" "}
                  <Button
                    icon={<FontAwesomeIcon icon={faLinkedin} size="lg" />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
