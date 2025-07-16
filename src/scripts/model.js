import { evaluate } from "mathjs";

export const state = {
  currentInput: "",
  currentOperator: null,
  toDisplayArray: [],
  screenDisplay: null,
  result: null,
  hasResult: false,
};

const operatorsAll = ["%", "/", "x", "-", "+", "="];
const invalidStartOperator = ["%", "/", "x", "="];

//DIGITS
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
  console.log(state);
};

//OPERATOR
export const handleOperator = function (operator) {
  //Prevent invalid starts operator
  if (state.currentInput === "" && invalidStartOperator.includes(operator))
    return;

  
};
