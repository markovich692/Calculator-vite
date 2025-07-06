import "../sass/style.scss";
import view from "./views";


calcKeyboardButtons.addEventListener("click", function (e) {
  const btn = e.target;

  if (!btn) return;

  //DIGITS
  if (btn.className.includes("keyboard__btn--digit")) {
    const digitclicked = btn.textContent;

    screenDisplay.textContent = digitclicked;
  }

  //DIGITS
  if (btn.className.includes("keyboard__btn--fn")) {
    const digitclicked = btn.textContent;
    screenDisplay.textContent = digitclicked;
  }
});


const controlDigitDisplay = function (digit) {
  






}








const init = function () {
  view.renderDigits(controlDigitDisplay);
};

init();
