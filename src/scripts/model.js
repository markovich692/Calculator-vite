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
    console.log(operator);

    //Resets the state
    if (operator === "AC") {
      handleAllClear();
      return;
    }

    //Adds condition to handle CE
    if (operator === "CE") {
      handleClearEntry();
      return;
    }

    //Prevents overflowing
    if (state.screenDisplay && state.screenDisplay.length > 12) return;

    //Improves the UX, allowing to directly perform the operation adding to the result
    if (state.hasResult === true && operator !== "=") {
      state.toDisplayArray = [String(state.result)];
      state.currentInput = "";
      state.hasResult = false;
    }

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

    //updates currentOperator;
    state.currentOperator = displayOperator;
  } catch (error) {
    console.log(error);
  }
};

export const handleEquals = function () {
  try {
    //Adds currentInput to the toDisplayArray if there is one
    if (state.currentInput !== "")
      state.toDisplayArray.push(state.currentInput);

    //Prevents to perform the evaluation if there is nothing to calculate
    if (!state.toDisplayArray.length) return;

    //Remove trailing operators from toDisplayArray
    if (
      [...operatorsAll]
        .slice(0, 5)
        .includes(state.toDisplayArray[state.toDisplayArray.length - 1])
    ) {
      state.toDisplayArray = state.toDisplayArray.slice(
        0,
        state.toDisplayArray.length - 1
      );
    }

    //Handle single number case
    if (state.toDisplayArray.length === 1) {
      state.result = state.toDisplayArray[0];
      state.screenDisplay = String(state.toDisplayArray[0]);

      //Updates the state
      state.currentInput = "";
      state.hasResult = true;
      state.lastAction = "equals";
      return;
    }

    //Replace all the x operators by * and evaluates the expression
    const evaluateExpression = evaluate(
      state.toDisplayArray.join("").replaceAll("x", "*")
    );

    //Handles division by zero
    if (!isFinite(evaluateExpression)) {
      state.screenDisplay = "Error";

      state.currentInput = "";
      state.currentOperator = null;
      state.toDisplayArray = [];
      state.result = null;
      state.hasResult = false;
      state.lastAction = null;

      return;
    }

    let formattedResult = String(evaluateExpression);
    if (formattedResult.length > 12) {
      formattedResult = evaluateExpression.toExponential(6);
      if (formattedResult.length > 12) {
        formattedResult = "Error";
      }
    }

    //Updates the state object
    state.result = formattedResult;
    state.screenDisplay = formattedResult;
    state.currentInput = "";
    state.hasResult = true;
    state.lastAction = "equals";
  } catch (err) {
    console.log(err);
  }
};

export const handleAllClear = function () {
  state.currentInput = "";
  state.currentOperator = null;
  state.toDisplayArray = [];
  state.screenDisplay = "0";
  state.result = null;
  state.hasResult = false;
  state.lastAction = null;
};

export const handleClearEntry = function () {

  if (state.lastAction === "equals") {
    state.currentInput = "";
    state.screenDisplay = "0";
    state.result = null;
    state.hasResult = false;
    state.lastAction = null;
    return;
  }

  if (state.currentInput !== "") {
    state.currentInput = "";
    state.screenDisplay = state.toDisplayArray.join("") || "0";
    return;
  }

  if (state.lastAction === "operator") {
    console.log(state);
  }
};
