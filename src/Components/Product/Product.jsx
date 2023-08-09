import React, { memo, Fragment } from "react";
import "./Product.css";
import { NumericFormat } from "react-number-format";
import { acAddItem } from "../../Context/cart";
import { useDispatch } from "react-redux";
import img from "./dont-know-posing.svg";
import { acSearch } from "../../Context/search";

export const Product = memo(({ data }) => {
  const handleAddToCart = (item) => {
    dispatch(acAddItem(item));
  };
  const dispatch = useDispatch();

  return (
    <Fragment>
      {data?.map((item, index) => {
        return (
          <figure
            className="product"
            title={item.name}
            key={item.id}
            onClick={() => {
              handleAddToCart(item);
              dispatch(acSearch(""));
            }}
          >
            <img src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
            <NumericFormat
              value={item.price}
              displayType="text"
              thousandSeparator=" "
              suffix=" ₹"
            />
          </figure>
        );
      })}
      <div
        style={
          data.length
            ? { display: "none" }
            : {
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px",
              }
        }
      >
        <img
          src={img}
          alt=""
          style={
            data.length
              ? { display: "none" }
              : {
                  display: "flex",
                  width: "100%",
                  height: "calc(100% - 130px)",
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        />
        <h1>Hech qanday mahsulot topilmadi!</h1>
      </div>
    </Fragment>
  );
});
