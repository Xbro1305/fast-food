import React from "react";
import "./OrderPage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { acForOrder } from "../../Context/forOrder";
import { acClear } from "../../Context/cart";
import { enqueueSnackbar } from "notistack";

export const OrderPage = () => {
  const forOrder = useSelector((state) => state.forOrder);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const orderMsg = () => {
    const msg = "Buyurtmangiz qabul qolindi!";
    enqueueSnackbar(msg, { variant: "success" });
  };

  return (
    <div className="orderPage">
      <form className={forOrder ? "form" : "nonePay "}>
        <h1>Buyurtma berish</h1>
        <label>
          <h1 className="titlee">Ismingizni kiriting</h1>
          <input
            type="text"
            placeholder="Ismingizni kiriting"
            className="input"
          />
        </label>
        <label>
          <h1 className="titlee">Telefon raqamingizni kiriting</h1>
          <input
            type="text"
            placeholder="Telefon raqamingizni kiring"
            className="input"
          />
        </label>
        <label>
          <h1 className="titlee">Uy manzilingizni kiritng</h1>
          <input
            type="text"
            placeholder="Uy manzilingizni kiritng"
            className="input"
          />
        </label>
        <h1 className="TP">
          <span>To'lov uchun:</span> <span>{`${totalPrice} ₹`}</span>
        </h1>
        <section className="orderPayType">
          <button
            type="button"
            onClick={() => {
              dispatch(acForOrder(forOrder));
              dispatch(acClear());
              orderMsg()
            }}
          >
            {"Buyurtma kelganida >"}
          </button>
          <a type="button" href="https://qiwi.com/p/998907972010">
            {"Qiwi orqali >"}
          </a>
        </section>
      </form>
    </div>
  );
};
