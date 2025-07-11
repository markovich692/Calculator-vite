import "../sass/style.scss";
import view from "./views/View";
import * as model from "./model";

const controlDigitDisplay = function (digitClicked) {
  model.updateStateValues(digitClicked);
  view.updateScreen(model.state.currentInput);
  // console.log(model.state);
};

const controlOperatorDisplay = function (operatorClicked) {
  model.handleOperator(operatorClicked);
  view.updateScreen(operatorClicked);
};

const init = function () {
  view.renderDigitContent(controlDigitDisplay);
  view.renderOperatorContent(controlOperatorDisplay);
};

init();
