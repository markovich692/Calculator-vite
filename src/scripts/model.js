export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
  displayComplete: [],
};

//Displays the digits on click
export const updateStateValues = function (digitClicked) {
  if (state.currentInput.length > 12 || state.displayComplete > 12) return;
  state.currentInput = String(Number(state.currentInput + digitClicked));

  //Update the displayComplete state property
};

export const handleOperator = function (operatorClicked) {
  if (state.displayComplete.length > 12) return;
  state.displayComplete.push(operatorClicked);
};

/*
//Handles operators display and functions
export const handleOperator = function (operatorClicked) {
  if (state.currentInput && state.previousValue !== null) {
    //The operator is clicked for the second time
    updateResult();
    console.log(state);
  }

  //The operator is clicked for the first time
  if (state.currentInput && state.previousValue === null) {
    state.previousValue = Number(state.currentInput);
  }

  state.currentOperator = operatorClicked;
  state.currentInput = "";
  console.log(state);
};

const updateResult = function () {
  const curInput = Number(state.currentInput);
  const prevValue = state.previousValue;
  const curOperator = state.currentOperator;

  if (curOperator === "/") {
    state.previousValue = prevValue / curInput;
    state.result = prevValue / curInput;
  }

  if (curOperator === "x") {
    state.previousValue = prevValue * curInput;
    state.result = prevValue * curInput;
  }

  if (curOperator === "-") {
    state.previousValue = prevValue - curInput;
    state.result = prevValue - curInput;
  }

  if (curOperator === "+") {
    state.previousValue = Number(curInput) + prevValue;
    state.result = Number(curInput) + prevValue;
  }
};
*/
