export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
};

export const updateStateValues = function (digitClicked) {
  if (state.currentInput.length > 12) return;
  state.currentInput = state.currentInput + digitClicked;
};

export const handleOperator = function (operatorClicked) {
  //Update the previousValue
  state.currentOperator = operatorClicked;

  //previousValue
  state.previousValue = Number(state.currentInput);

  //Update currentInput
  state.currentInput = "";
};
