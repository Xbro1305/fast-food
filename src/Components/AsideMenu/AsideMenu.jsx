import React from "react";
import "./AsideMenu.css";
import { useSelector } from "react-redux";

export const AsideMenu = () => {
  const menu = useSelector((state) => state.sideBar);

  return (
    <div className={menu ? "AsideMenu active" : "AsideMenu"}>
      <section>
        <h1>MENU</h1>
      </section>
    </div>
  );
};
