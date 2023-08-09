export const reMenu = (state = false, action) => {
  switch (action.type) {
    case "SET_MENU":
      return !state;
    default:
      return state;
  }
};

export const acMenu = () => ({ type: "SET_MENU" });
