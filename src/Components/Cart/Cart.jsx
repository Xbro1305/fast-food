import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { NumericFormat } from "react-number-format";
import { acInc, acDec, acRemoveItem } from "../../Context/cart";
import { acOrder } from "../../Context/Order";
import { BsCartX } from "react-icons/bs";

export const Cart = () => {
  const items = useSelector((state) => state.items);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      <ul>
        <li className="title">
          <h1>Nomi</h1>
          <h2>Soni</h2>
          <h3>Narxi</h3>
        </li>
      </ul>
      <span
        className="emptyCart"
        style={items.length ? { display: "none" } : {}}
      >
        {items ? <BsCartX /> : ""}
      </span>
      <ol className="list">
        {items?.map((item, index) => {
          return (
            <li className="listItem" title={item.name} key={index}>
              <p>{item.name}</p>
              <div>
                <button onClick={() => dispatch(acInc(item))}>+</button>
                {item.quantity}
                <button onClick={() => dispatch(acDec(item))}>-</button>
              </div>
              <NumericFormat
                value={item.price * item.quantity}
                displayType="text"
                thousandSeparator=" "
                suffix=" ₹"
              />
              <button
                className="delButton"
                onClick={() => dispatch(acRemoveItem(index))}
              >
                <BsFillTrashFill />
              </button>
            </li>
          );
        })}
      </ol>
      <div className={totalPrice ? "payWindow" : "nonePay"}>
        <div className={totalPrice ? "price" : "nonePay"}>
          <h2>Ja'mi: </h2>
          <h1>{totalPrice}</h1>
        </div>
        <div className={totalPrice ? "pay" : "nonePay"}>
          <button
            className={totalPrice ? "order" : "nonePay"}
            onClick={() => {
              dispatch(acOrder(order));
            }}
          >
            {"Buyurtm berish >"}
          </button>
        </div>
      </div>
    </div>
  );
};
