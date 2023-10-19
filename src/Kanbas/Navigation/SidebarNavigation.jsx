import { Link, useLocation } from "react-router-dom";
import "./index.css";

function SidebarNavigation({ links }) {
  const { pathname } = useLocation();

  return (
    <nav className="sidebar-nav d-none d-md-block">
      <ul className="sidebar-nav__list">
        {links &&
          links.map((link) => (
            <li
              key={link.name}
              className={`sidebar-nav__item ${
                link.route &&
                pathname.includes(link.route) &&
                "sidebar-nav__item--active"
              }`}
            >
              <Link to={link.route || pathname}>{link.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default SidebarNavigation;
