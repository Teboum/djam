import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <div className="header">
      <img id="logo" src={"images/header-logo.png"} alt="Solidari'terre" />

      <ul>
        <li>
          <Link to="/" className={window.location.pathname === "/" && "active"}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={window.location.pathname === "/events" && "active"}
          >
            Évènements
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact" ? "active" : null
            }
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/temoignage"
            className={
              window.location.pathname === "/temoignage" ? "active" : null
            }
          >
            Témoignages
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
