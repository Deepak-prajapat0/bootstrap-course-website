import React from 'react'
import { Link } from 'react-router-dom';

function CompanyLink({linkIndex,setLink,unSetLink}) {
    const companyLinks = ["About", "Pricing", "Blog", "Careers", "Contact"];
  return (
    <div id="company-page" className=' text-sm-start text-center'>
          <h4>Company</h4>
    <ul className="list-group" style={{ fontSize: "14px" }}>
    {companyLinks.map((link) => {
      return (
        <li
          className={`list-group-item  border border-0 `}
          key={link}
        >
          <Link
            className={`${linkIndex === link ? "text-primary":"text-secondary"}`}
            style={{ textDecoration: "none" }}
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
  )
}

export default CompanyLink