import { evaluate } from "mathjs";

export const state = {
  currentInput: "",
  currentOperator: null,
  toDisplayArray: [],
  screenDisplay: null,
  result: null,
  hasResult: false,
};

//Displays the digits on click
export const handleDigits = function (digit) {
  if (state.currentInput.length > 12) return;

  //Prevent 2 dots in an input
  if (state.currentInput.includes(".") && digit === ".") return;

  //Prevent 2 consecutives 0 at the beginning of an Input
  if (state.currentInput === "0" && digit === "0") return;

  //Allows decimal number to be defined
  if (state.currentInput === "0" && digit !== ".") {
    state.currentInput = digit;
  } else {
    state.currentInput += digit;
  }

  state.screenDisplay = state.currentInput;
};

export const handleOperator = function (operator) {
  //Adds operator to the currenInput
  state.currentInput += operator;

  //Updates the screenDisplay property
  state.screenDisplay = state.currentInput;
};

/*
export const updateDisplayFull = function (btnClicked) {
  const operatorsAll = ["-", "+", "/", "%", "x", "=", "."];
  const operatorsStart = ["/", "%", "x", "=", "."];
  const lastElementDisplay = state.displayFull[state.displayFull.length - 1];

  //Make sure that equal can only be used when the state.displayFull.length is at least 3
  if (state.displayFull.length < 3 && btnClicked === "=") return;

  //Prevent the calculation to start with a zero
  if (!state.displayFull.length && btnClicked === "0") return;

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

export const evaluateExpression = function () {};
*/
