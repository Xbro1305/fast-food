import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Router";
import "./Assets/Global.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Context/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>
);
