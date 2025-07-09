import "../sass/style.scss";
import view from "./views/View";
import * as model from "./model";

const init = function () {
  view.renderDigits(controlDigitDisplay);
};

init();
