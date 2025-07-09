export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
};

export const updateStateValues = function (newInput) {
  if (state.currentInput.length > 12) return;
  state.currentInput += newInput;
};

/*
 Updates the previousValue (only when operator is clicked)
  state.previousValue = Number(state.digitCurrent);
  */
