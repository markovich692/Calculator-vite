import "../sass/style.scss";
import view from "./views/View";
import * as model from "./model";

const controlDigitDisplay = function (digit) {
  //Updates the currentValue in the state
  model.stateValuesUpdated(digit);

  //Display the current value on the screen
  view.updateScreen(model.state.digitCurrent);

};

/////////////////////////
const controlFunctionDisplay = function (fn) {
  //Update the screen with the function content

  view.updateScreen(fn);
};

const init = function () {
  view.renderDigits(controlDigitDisplay);
  view.renderFunction(controlFunctionDisplay);
};

init();
