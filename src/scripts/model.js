import { evaluate } from "mathjs";

export const state = {
  currentInput: "",
  currentOperator: null,
  toDisplayArray: [],
  screenDisplay: null,
  result: null,
  hasResult: false,
  clickCount: 0,
};

const operatorsAll = ["%", "/", "*", "-", "+", "="];
const invalidStartOperator = ["%", "/", "x", "="];

//DIGITS
export const handleDigits = function (digit) {
  if (state.currentInput.length > 12 || state.clickCount > 12) return;

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

  state.clickCount = state.clickCount + 1;
  state.screenDisplay = [...state.toDisplayArray, state.currentInput].join("");
};

//OPERATOR
export const handleOperator = function (operator) {
  try {
    if (state.currentInput.length > 12 || state.clickCount > 12) return;

    //ignores the equal sign operator
    if (operator === "=") return;

    if (operator === "x") operator = "*";

    //Prevent invalid starts operator
    if (state.currentInput === "" && invalidStartOperator.includes(operator)) {
      return (state.screenDisplay = "0");
    }

    //Check for Existing Input
    if (state.currentInput !== "" && operatorsAll.includes(operator)) {
      state.toDisplayArray.push(state.currentInput);
      state.currentInput = "";
    }

    //Prevents 2 consecutive operators
    if (
      operatorsAll.includes(
        state.toDisplayArray[state.toDisplayArray.length - 1]
      )
    ) {
      state.toDisplayArray[state.toDisplayArray.length - 1] = operator;
    } else {
      state.toDisplayArray.push(operator);
    }

    state.screenDisplay = state.toDisplayArray.join("");

    state.clickCount = state.clickCount + 1;
  } catch (error) {
    console.log(error);
  }
};
