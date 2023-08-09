import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Products } from "./Pages/Products/Products";
import { Menu } from "./Components/Menu/Menu";
import { Cart } from "./Components/Cart/Cart";
import { OrderPage } from "./Components/OrderPage/OrderPage";
import { useSelector } from "react-redux";
import { AsideMenu } from "./Components/AsideMenu/AsideMenu";

export const App = () => {
  const order = useSelector((state) => state.order);

  return (
    <main className="main">
      <header className="header">
        <Navbar />
      </header>
      <aside className="aside">
        <Cart />
        <AsideMenu />
      </aside>
      <section className="menu">
        <Products />
        <Menu />
      </section>
      <div className={order ? "orderSection" : ""}>
        {order ? <OrderPage /> : ""}
      </div>
    </main>
  );
};
