import React from "react";
import "./Menu.css";
import { types } from "../../Pages/Products/Products";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { acSearch } from "../../Context/search";

export const Menu = React.memo(() => {
  const navigate = useNavigate();
  const handleClick = (type) => navigate(`?q=${type}`);
  const dispatch = useDispatch();

  return (
    <div className="menuCategories">
      <button
        className="menuItem"
        onClick={() => {
          navigate("");
          dispatch(acSearch(""));
        }}
      >
        Hammasi
      </button>
      {types?.map((type, index) => {
        return (
          <button
            key={index}
            className="menuItem"
            onClick={() => handleClick(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
});
