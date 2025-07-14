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
  //Update the displayFull state property
  updateDisplayFull(digitClicked);
  // console.log(state);
};

export const handleOperator = function (operatorClicked) {
  if (state.displayFull.length > 12) return;
  //Update the displayFull state property
  updateDisplayFull(operatorClicked);

  //Update the state previous values and current operator

  calcStateLogic(operatorClicked);
};

export const updateDisplayFull = function (btnClicked) {
  const operatorsAll = ["+", "-", "/", "%", "x", "=", "."];
  const lastElementDisplay = state.displayFull[state.displayFull.length - 1];
  const operatorsStart = ["/", "%", "x", "=", "."];

  //Prevent the calculation to start with certain operators
  if (!state.displayFull.length && operatorsStart.includes(btnClicked)) return;

  //Prevent the 2 operators from following each other
  if (
    operatorsAll.includes(lastElementDisplay) &&
    operatorsAll.includes(btnClicked)
  )
    return;

  state.displayFull.push(btnClicked);

  const rendered = state.displayFull.join("");

  state.screenDisplay = rendered;
};

export const calcStateLogic = function (operator) {
  //Operator is clicked for the second time
  if (state.currentInput && state.previousValue !== null) {
    updateResult();
  }

  //Operator is clicked for the first time
  if (state.currentInput && state.previousValue === null) {
    state.previousValue = Number(state.currentInput);
  }

  state.currentOperator = operator;
  state.currentInput = "";
};

export const handleCalculations = function (operator) {};
