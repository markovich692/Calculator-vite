export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
};

export const updateStateValues = function (newDigit) {
  if (state.currentInput.length > 12) return;
  state.currentInput = state.currentInput + newDigit;
};

export const updateOperator = function (newOperator) {
  state.currentOperator = newOperator;
  state.previousValue = Number(state.currentInput);
  state.currentInput = "";

  console.log(state);
};


