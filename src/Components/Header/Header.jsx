import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/1b/b7/bc/1bb7bcdd-6647-8d3d-bcd6-979d690f6828/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/1200x630wa.png" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}> Login </NavLink>}
      </div>
    </header>
  );
};

export default Header;
