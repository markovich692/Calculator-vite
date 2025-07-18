import view from "./views/View";
import * as model from "./model";

const controlDigitDisplay = function (digit) {
  model.handleDigits(digit);

  view.updateScreen(model.state.screenDisplay);
};

const controlOperatorDisplay = function (operator) {
  model.handleOperator(operator);

  view.updateScreen(model.state.screenDisplay);
};

const init = function () {
  view.renderDigitContent(controlDigitDisplay);
  view.renderOperatorContent(controlOperatorDisplay);
};

init();
