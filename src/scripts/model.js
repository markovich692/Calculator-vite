export const state = {
  currentInput: "",
  currentOperator: null,
  displayFull: [],
  screenDisplay: null,
  result: null,
};

//Displays the digits on click
export const updateStateValues = function (digitClicked) {
  if (state.currentInput.length > 12 || state.displayFull.length > 12) return;
  state.currentInput = String(Number(state.currentInput + digitClicked));
  //Update the displayFull state property
  updateDisplayFull(digitClicked);
};

export const handleOperator = function (operatorClicked) {
  //Prevent the screen content to overflow
  if (state.displayFull.length > 12) return;

  //Update the displayFull state property
  updateDisplayFull(operatorClicked);
};

export const updateDisplayFull = function (btnClicked) {
  const operatorsAll = ["-", "+", "/", "%", "x", "=", "."];
  const operatorsStart = ["/", "%", "x", "=", "."];
  const lastElementDisplay = state.displayFull[state.displayFull.length - 1];

  //Prevent the calculation to start with any operator
  if (!state.displayFull.length && operatorsStart.includes(btnClicked)) return;

  //Prevent the 2 operators from following each other
  if (
    operatorsAll.includes(lastElementDisplay) &&
    operatorsAll.includes(btnClicked)
  )
    return;

  state.currentInput = "";

  state.displayFull.push(btnClicked);

  const rendered = state.displayFull.join("");

  state.screenDisplay = rendered;
};
