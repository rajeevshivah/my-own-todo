import React from "react";
import style from "./Header.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <h2 className={style.name}>My TODO</h2>
      <nav>
        <div className={style.nav_bg}></div>

        <ul>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/remainingtodo">Remaining</Link>
          </li>
          <li>
            <Link to="/list">All</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
