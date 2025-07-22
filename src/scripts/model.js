import { evaluate } from "mathjs";

export const state = {
  currentInput: "",
  currentOperator: null,
  toDisplayArray: [],
  screenDisplay: "0",
  result: null,
  hasResult: false,
  lastAction: null,
};

const operatorsAll = ["%", "/", "*", "-", "+", "="];
const invalidStartOperator = ["%", "/", "*", "="];

//DIGITS
export const handleDigits = function (digit) {
  //Prevents overflowing
  if (state.screenDisplay && state.screenDisplay.length > 12) return;

  //Prevent 2 dots in an input
  if (state.currentInput.includes(".") && digit === ".") return;

  //Prevent 2 consecutives 0 at the beginning of an Input
  if (state.currentInput === "0" && digit === "0") return;
  if (state.currentInput === "" && digit === "00") return;

  //Allows decimal number to be defined
  if (state.currentInput === "0" && digit !== ".") {
    state.currentInput = digit;
  } else {
    state.currentInput += digit;
  }

  state.screenDisplay =
    [...state.toDisplayArray, state.currentInput].join("") || "0";

  //Updates the lastAction in the state
  state.lastAction = "digit";
};

//OPERATOR
export const handleOperator = function (operator) {
  try {
    //Prevents overflowing
    if (state.screenDisplay && state.screenDisplay.length > 12) return;

    //Ignores the equal sign operator
    // if (operator === "=") {
    //   handleEquals();
    //   return;
    // }

    if (operator === "=") {
      handleEquals();
      return;
    }

    const displayOperator = operator;

    const calculationOperator = operator === "x" ? "*" : operator;

    //Check for Existing Input
    if (
      state.currentInput !== "" &&
      operatorsAll.includes(calculationOperator)
    ) {
      state.toDisplayArray.push(state.currentInput);
      state.currentInput = "";
    }

    // Handle consecutive operators
    const lastItem = state.toDisplayArray[state.toDisplayArray.length - 1];

    const isLastItemOperator =
      operatorsAll.includes(lastItem) || lastItem === "x";

    if (isLastItemOperator) {
      // Special case: if last was "%" and current is NOT "%", allows it (like "9%+")
      if (lastItem === "%" && displayOperator !== "%") {
        state.toDisplayArray.push(displayOperator);
      } else {
        // Normal case: replace the last operator
        state.toDisplayArray[state.toDisplayArray.length - 1] = displayOperator;
      }
      state.screenDisplay = state.toDisplayArray.join("");

      //Updates lastAction property in the state
      state.lastAction = "operator";
      return;
    }

    //Prevent invalid starts
    if (
      state.currentInput === "" &&
      state.toDisplayArray.length === 0 &&
      (invalidStartOperator.includes(displayOperator) ||
        displayOperator === "x")
    ) {
      state.screenDisplay = "0";
      return;
    }

    // Add new operator
    state.toDisplayArray.push(displayOperator);
    state.screenDisplay = state.toDisplayArray.join("");

    //Updates the lastAction in the state
    state.lastAction = "operator";
  } catch (error) {
    console.log(error);
  }
};

const handleEquals = function () {
  try {
    state.toDisplayArray = [...state.toDisplayArray, state.currentInput];
    const result = evaluate(state.toDisplayArray.join(""));
    state.result = result;
    state.hasResult = true;
  } catch (error) {}
};
