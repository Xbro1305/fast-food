import React, { useState } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { acSearch } from "../../Context/search";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { Fragment } from "react";
import { acMenu } from "../../Context/reMenu";

export const Navbar = () => {
  const [searchInupt, setSearchInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const menu = useSelector((state) => state.sideBar);
  const t = useSelector((state) => state.test);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(menu);

  return (
    <Fragment>
      <nav className="nav">
        <div>
          <button className="hamMenu" onClick={() => dispatch(acMenu())}>
            {!menu ? <HiMenu /> : <HiMenuAlt1 />}
          </button>
          <h1>Fast food</h1>
          <h1>{t}</h1>
        </div>
        <input
          type="search"
          placeholder="Qidirish"
          className={searchInupt ? "search active" : "search"}
          onFocus={() => {
            navigate("");
            setSearchInput(true);
          }}
          onBlur={() => {
            setSearchInput(false);
            setInputValue("");
          }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            dispatch(acSearch(e.target.value));
          }}
        />
      </nav>
    </Fragment>
  );
};
