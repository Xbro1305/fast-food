export const reTest = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      return (state = action.payload);
    default:
      return state;
  }
};

export const acSearch = (inputValue) => {
  return {
    type: "SEARCH",
    payload: inputValue,
  };
};
