export const state = {
  currentDigit: "",
  currentValue: 0,
  currentOperator: null,
  updatedOperator: null,
};

export const valueCurrent = function (newDigit) {
  if (state.currentDigit.length < 13) {
    state.currentDigit = state.currentDigit + newDigit;
  }
};
