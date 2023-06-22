import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyLink from "./CompanyLink";
import SupportLinks from "./SupportLinks";
import ContactInfo from "./ContactInfo";

function Footer() {
  const [linkIndex, setLinkIndex] = useState("");
  function setLink(link) {
    setLinkIndex(link);
  }
  function unSetLink() {
    setLinkIndex("");
  }

  return (
    <footer className="mt-5 p-2 pt-5 pb-0">
      <hr />
      <div className="pt-4 p-sm-5 d-flex flex-column flex-lg-row flex-md-row justify-content-around  align-items-sm-start  align-items-center gap-4 ">
        <div className="d-flex flex-column gap-2" style={{ width: "20rem",minWidth:"3rem" }}>
          <img src="https://img.freepik.com/free-vector/open-book-pages-logo_126523-2795.jpg?size=868&ext=jpg&ga=GA1.1.675969270.1687239235&semt=ais" alt="logo" style={{width:"9rem",margin:"auto"}} />
          <p className="text-wrap">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste culpa
            nihil illum unde eos quisquam adipisci itaque nostrum quam dolor
            consequuntur, libero aspernatur corrupti commodi.
          </p>
          <div
            id="social-links"
            className="d-flex flex-row gap-4 justify-content-center"
          >
            <i>&#9733;</i>
            <i>&#9733;</i>
            <i>&#9733;</i>
          </div>
        </div>

        <CompanyLink {...{ linkIndex, setLink, unSetLink }} />
        <SupportLinks {...{ linkIndex, setLink, unSetLink }} />
        <ContactInfo />

      </div>
      <hr />
      <div
        id="footer-bottom"
        className="mt-2 p-3 d-flex flex-row justify-content-start gap-3"
      >
        <span>Copyright @2023</span>
        <Link style={{ textDecoration: "none", color: "black" }}>
          Terms and condition
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
