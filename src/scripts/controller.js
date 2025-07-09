import "../sass/style.scss";
import view from "./views/View";
import * as model from "./model";

const controlDigitDisplay = function (digitClicked) {
  model.updateStateValues(digitClicked);
  view.updateScreen(model.state.currentInput);
};

const init = function () {
  view.renderContent(controlDigitDisplay);
};

init();
