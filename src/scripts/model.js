export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
};

export const updateStateValues = function (newDigit) {
  if (state.currentInput.length > 12) return;
  state.currentInput = state.currentInput + newDigit;
  console.log(state);
};

//Handles operator logic
export const updateOperator = function (newOperator) {
  console.log("operator clicked");
};
