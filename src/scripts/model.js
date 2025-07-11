export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
  // displayAll: [],
};

export const updateStateValues = function (digitClicked) {
  if (state.currentInput.length > 12) return;
  state.currentInput = String(Number(state.currentInput + digitClicked));
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

    console.log(state);
  }

  state.currentOperator = operatorClicked;
  state.currentInput = "";

  console.log(state);
};

const updateResult = function () {
  const curInput = Number(state.currentInput);
  const prevValue = state.previousValue;
  const curOperator = state.currentOperator;

  if (curOperator === "+") {
    state.previousValue = Number(curInput) + prevValue;
    state.result = Number(curInput) + prevValue;
  }

  if (curOperator === "-") {
    state.previousValue = prevValue - curInput;
    state.result = prevValue - curInput;
  }

  if (curOperator === "/") {
    state.previousValue = prevValue / curInput;
    state.result = prevValue / curInput;
  }
};
