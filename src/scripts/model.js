export const state = {
  currentValue: "",
  currentOperator: null,
  updatedOperator: null,
};

export const addValueDisplay = function (newNumber) {
  state.updatedValue = state.updatedValue + newNumber;

  // console.log(state);
};
