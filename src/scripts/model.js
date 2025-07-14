export const state = {
  currentInput: "",
  previousValue: null,
  currentOperator: null,
  result: null,
  displayFull: [],
  screenDisplay: null,
};

//Displays the digits on click
export const updateStateValues = function (digitClicked) {
  if (state.currentInput.length > 12 || state.displayFull.length > 12) return;
  state.currentInput = String(Number(state.currentInput + digitClicked));
  //Update the displayComplete state property
  updateDisplayFull(digitClicked);
};

export const handleOperator = function (operatorClicked) {
  if (state.displayFull.length > 12) return;
  updateDisplayFull(operatorClicked);
};

export const updateDisplayFull = function (btnClicked) {
  state.displayFull.push(btnClicked);
  const rendered = state.displayFull.join("");
  state.screenDisplay = rendered;
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
