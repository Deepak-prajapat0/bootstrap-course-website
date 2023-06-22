import React from "react";
import { Link } from "react-router-dom";

function SupportLinks({ linkIndex, setLink, unSetLink }) {
  const supportLinks = [
    "Help and Support",
    "Beacome Instructor",
    "Get the app",
    "FAQ's",
    "Tutorial",
  ];
  return (
    <div id="support-page" className=" text-sm-start text-center ">
      <h4>Support</h4>
      <ul className="list-group" style={{ fontSize: "14px" }}>
        {supportLinks.map((link) => {
          return (
            <li
              className={`list-group-item border border-0 ${
                linkIndex === link && "text-primary"
              }`}
              key={link}
            >
              <Link
                className={`${
                  linkIndex === link ? "text-primary" : "text-secondary"
                }`}
                style={{ textDecoration: "none", color: "black" }}
                onMouseEnter={() => setLink(link)}
                onMouseLeave={unSetLink}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SupportLinks;
