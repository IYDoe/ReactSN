import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import TopFriends from "./TopFriends.jsx/TopFriends";


const Navbar = (props) => {


  return (
    <div className={s.nav}>
      <nav >
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
      </nav>
      <TopFriends friends={props.friends}/>
    </div>
  );
};

export default Navbar;