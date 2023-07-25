import React, { useEffect, useState } from 'react'
import contactImg from "../images/contactImg.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneVolume,
    faFileArrowDown,
  faEnvelope,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from '../components/Button';
import ResumeBtn from '../components/ResumeBtn';
import resume from "../Resume/resume.pdf"

export default function Contact() {
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
    <div id="contact">
        <div
        style={{
          background: "#001422",
          padding: "60px 8% 100px 8%",
          boxSizing:"border-box",
        }}
        class="nav-link contact">
          
        <h1 style={{ fontSize: "38px", textAlign: "center" }} >
          <FontAwesomeIcon icon={faPhoneVolume} size="sm" color="#007fda" />{" "}
          Contact Me
        </h1>

        <div className="contactDiv">
          <img src={contactImg} alt="image" />
          <div>
            <h2>Get In Touch</h2>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Email'/>
            <input type="Text" placeholder='Phone Number'/>
            <input type="text" placeholder='Write your Massage'/>
            <div style={{height:"40px",marginBottom:"40px",display:"flex", alignItems:"flex-start" }}>
            <Button text={"Submit"} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                marginBottom:"30px"
              }}
            >
              <div className="copyBtnDiv" style={{ width: "42%" }}>
                <p  id="contact-phone">
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
              <div id="buttons" style={{marginLeft:"-2px"}}>
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
                   
                <Link  id="contact-github" to="https://github.com/samaydhawale000" target="_blank">
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
  )
}
