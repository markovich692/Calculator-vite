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
  //Update the state if there is already a currentInput and an operator is clicked
  if (state.currentInput) {
    state.previousValue = Number(state.currentInput);
    state.currentOperator = operatorClicked;
    state.currentInput = "";
    updateResult();
  }

  // console.log(state);
};


