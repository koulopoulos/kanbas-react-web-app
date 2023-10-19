import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import NavigationIcon from "./NavigationIcon";
import primary from "./primary.json";
import "./index.css";

function MobileNavigation({ sidebarLinks }) {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <div className="mobile-navbar d-md-none d-lg-none d-xl-none dropdown">
      <div className="mobile-navbar__inner">
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={String(!isNavbarCollapsed)}
          aria-label="Toggle navigation"
          onClick={() => setIsNavbarCollapsed(false)}
        >
          <FaBars />
        </button>
        <span className="text-center">
          CS4550.19753.202410
          <br />
          Home
        </span>
        <button
          className="navbar-toggler sidebar-nav-toggler collapsed"
          type="button"
          aria-expanded={String(!isSidebarCollapsed)}
          aria-label="Toggle sidebar navigation"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          {isSidebarCollapsed ? <FaAngleDown /> : <FaX />}
        </button>
      </div>
      <div
        className={`mobile-primary-nav collapse ${
          isNavbarCollapsed ? "" : "show"
        }`}
      >
        <button
          className="navbar-toggler float-end"
          type="button"
          aria-controls="mobilePrimaryNavDropdown"
          aria-expanded={String(!isNavbarCollapsed)}
          aria-label="Toggle navigation"
          onClick={() => setIsNavbarCollapsed(true)}
        >
          <FaX className="fa fa-x" />
        </button>
        <ul className="kanbas-list">
          {primary &&
            primary.map((link) => (
              <li key={link.name} className="primary-nav__item">
                <Link
                  onClick={() => setIsNavbarCollapsed(true)}
                  className="kanbas-link"
                  to={link.route ? `/kanbas/${link.route}` : ""}
                >
                  <div className="mobile-primary-nav__item-content">
                    <NavigationIcon name={link.name} />
                    <span>{link.name}</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <ul
        className={`mobile-sidebar-nav collapse kanbas-list ${
          isSidebarCollapsed ? "" : "show"
        } `}
      >
        {sidebarLinks &&
          sidebarLinks.map((link) => (
            <li key={link.name} className="mobile-sidebar-nav__dropdown-item">
              <Link
                onClick={() => setIsSidebarCollapsed(true)}
                className="kanbas-link"
                to={link.route ? `/kanbas/${link.route}` : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MobileNavigation;
