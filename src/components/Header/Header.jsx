import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div><img src="https://it-yota.ru/upload/iblock/cc0/podklyuchenie_yota_4g.png" alt="logo" />
        <div className={classes.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </div>
    </header>
  )
}
export default Header;