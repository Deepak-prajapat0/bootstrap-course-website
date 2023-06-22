import React from 'react'
import { Link } from 'react-router-dom';

function Navbar({open,openSidebar}) {
    const link = [
        { name: "Home", url: "/" },
        { name: "All course", url: "/" },
        { name: "My courses", url: "/" },
        { name: "About us", url: "/" },
        { name: "Contact", url: "/" },
      ];
  return (
    <ul className="navbar-nav  d-flex flex-lg-row  flex-md-row flex-column  " data-bs-theme="dark">
    {link.map((item, index) => {
      return (
        <li className="nav-item  " key={index}>
         {open ?
         <Link
         onClick={()=>openSidebar(false)}
         className={`nav-link px-2 mx-1  ${
           index === 0 && "active text-primary"
         }`}
         to={item.url}
       >
         {item.name}
       </Link>
        :
        <Link
        className={`nav-link px-2 mx-1  ${
          index ===0 && "active text-primary"
        }`}
        to={item.url}
      >
        {item.name}
      </Link>
        
        }
        </li>
      );
    })}
  </ul>
  )
}

export default Navbar