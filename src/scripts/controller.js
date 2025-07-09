import "../sass/style.scss";
import view from "./views/View";
import * as model from "./model";

const controlDigitDisplay = function (digitClicked) {
  model.updateStateValues(digitClicked);
  view.updateScreen(model.state.currentInput);
};

function controlOperatorDisplay(operatorClicked) {
  model.updateOperator(operatorClicked);
  view.updateScreen(model.state.currentOperator);
}

const init = function () {
  view.renderDigitContent(controlDigitDisplay);
  view.renderOperatorContent(controlOperatorDisplay);
};

init();
