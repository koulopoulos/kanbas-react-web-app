import { Link, useLocation } from "react-router-dom";
import NavigationIcon from "./NavigationIcon";
import primary from "./primary.json";
import "./index.css";

const KanbasNavigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="primary-nav d-none d-md-block">
      <div className="primary-nav__logo"></div>
      <ul className="primary-nav__list">
        {primary &&
          primary.map((link) => (
            <li
              key={link.name}
              className={`primary-nav__item ${
                pathname.includes(link.route) && "primary-nav__item--active"
              }`}
            >
              <Link to={link.route || pathname}>
                <div className="primary-nav__item-content">
                  <NavigationIcon
                    name={link.name}
                    className={
                      link.name === "Account" && "primary-nav__account-icon"
                    }
                  />
                  <span>{link.name}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default KanbasNavigation;
