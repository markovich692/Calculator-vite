class View {
  calcKeyboardButtons = document.querySelector(".keyboard__buttons");
  screenDisplay = document.querySelector(".screen__display-text");

  renderDigitContent(handler) {
    this.calcKeyboardButtons.addEventListener("click", function (e) {
      const btn = e.target;

      if (!btn) return;

      if (btn.className.includes("keyboard__btn--digit")) {
        const digitClicked = btn.textContent;

        handler(digitClicked);
      }

    });
  }

  renderOperatorContent(handler) {
    this.calcKeyboardButtons.addEventListener("click", function (e) {
      const btn = e.target;
      if (!btn) return;

        if (btn.className.includes("keyboard__btn--op")) {
          const operatorClicked = btn.textContent;

          handler(operatorClicked);
        }
    });
  }

  updateScreen(content) {
    this.screenDisplay.textContent = content;
  }
}

export default new View();
