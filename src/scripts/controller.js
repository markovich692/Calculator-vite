import "../sass/style.scss";
import view from "./views/View";
import * as model from "./model";

const controlDigitDisplay = function (digitClicked) {
  model.updateStateValues(digitClicked);

  view.updateScreen(model.state.screenDisplay);
};

const controlOperatorDisplay = function (operatorClicked) {
  model.handleOperator(operatorClicked);

  if (model.state.displayFull.length)
    view.updateScreen(model.state.screenDisplay);
};

const init = function () {
  view.renderDigitContent(controlDigitDisplay);
  view.renderOperatorContent(controlOperatorDisplay);
};

init();
