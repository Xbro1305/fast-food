export const reForOrder = (state = true, action) => {
  switch (action.type) {
    case "ORDER":
      return action.payload;
    default:
      return state;
  }
};

export const acForOrder = (state) => ({ type: "ORDER", payload: !state });
