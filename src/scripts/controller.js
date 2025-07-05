import "../sass/style.scss";

const calcKeyboardButtons = document.querySelector(".keyboard__buttons");
const screenDisplay = document.querySelector(".screen__display-text");

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
    console.log(btn.textContent);
  }
});
