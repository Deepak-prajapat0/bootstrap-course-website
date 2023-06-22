import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./NavLinks";
import NavButtons from "./NavButtons";

function Header() {
  const [open, setOpen] = useState(false);
  function openSidebar(){
    setOpen(false)
  }

  return (
    <header className="navbar navbar-expand shadow-sm ">
      <nav className="container-fluid d-flex flex-row justify-content-between">
        <img
          aria-label="logo"
          src="https://img.freepik.com/free-vector/open-book-pages-logo_126523-2795.jpg?size=70&ext=jpg&ga=GA1.1.675969270.1687239235&semt=ais"
          alt="logo"
        />
        <div className="d-md-block  d-lg-block d-none ">
          <Navbar />
        </div>
        <div className="btn-toolbar d-none d-lg-flex d-md-flex gap-2">
          <NavButtons />
        </div>
        <div className="d-lg-none d-md-none d-inline ">
          <span onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
          <Sidebar {...{ open, openSidebar }} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
