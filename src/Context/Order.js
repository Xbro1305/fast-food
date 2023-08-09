export const reOrder = (state = false, action) => {
  switch (action.type) {
    case "ORDER":
      return action.payload;
    default:
      return state;
  }
};

export const acOrder = (state) => ({ type: "ORDER", payload: !state });
