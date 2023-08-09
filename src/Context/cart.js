const data = JSON.parse(localStorage.getItem("cart") || "[]");

export const reItems = (state = data, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = { ...action.payload, quantity: 1 };
      const id = newItem.id;
      const find = state.find((item) => item.id === id);
      const newState = [...state, newItem];
      const newData = state.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(find ? newData : newState));
      return find ? newData : newState;
    case "INC":
      const incrementedState = state.map((item) =>
        item === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(incrementedState));
      return incrementedState;
    case "DEC":
      const decrementedState = state.map((item) =>
        item === action.payload
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(decrementedState));
      return decrementedState;
    case "DEL":
      const updatedState = state.filter(
        (item, index) => index !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    case "CLEAR":
      localStorage.removeItem("cart");
      return [];
    default:
      return state;
  }
};

export const acAddItem = (item) => ({ type: "ADD_ITEM", payload: item });
export const acRemoveItem = (index) => ({ type: "DEL", payload: index });
export const acDec = (item) => ({ type: "DEC", payload: item });
export const acInc = (item) => ({ type: "INC", payload: item });
export const acClear = () => ({ type: "CLEAR" });
