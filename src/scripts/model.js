export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
};

export const updateStateValues = function (digitClicked) {
  if (state.currentInput.length > 12) return;
  state.currentInput = state.currentInput + digitClicked;
  console.log(state);
};

export const handleOperator = function (operatorClicked) {
  //The operator is clicked for the second time
  if (state.currentInput && state.previousValue !== null) {
    updateResult();
    console.log(state);
  }

  //The operator is clicked for the first time
  if (state.currentInput && state.previousValue === null) {
    state.previousValue = Number(state.currentInput);
    state.currentOperator = operatorClicked;
    console.log(state);
  }

  state.currentInput = "";

  console.log(state);
};

const updateResult = function () {
  const curInput = state.currentInput;
  const prevValue = state.previousValue;
  const curOperator = state.currentOperator;



  
};
