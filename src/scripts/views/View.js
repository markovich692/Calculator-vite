class View {
  calcKeyboardButtons = document.querySelector(".keyboard__buttons");
  screenDisplay = document.querySelector(".screen__display-text");

  renderDigits(handler) {
    this.calcKeyboardButtons.addEventListener("click", function (e) {
      const btn = e.target;

      if (!btn) return;

      if (btn.className.includes("keyboard__btn--digit")) {
        const digitClicked = btn.textContent;

        // Pass the value to the controller so it can update the UI
        handler(digitClicked);
      }
    });
  }

  renderFunction(handler) {
    this.calcKeyboardButtons.addEventListener("click", function (e) {
      const btn = e.target;

      if (!btn) return;

      if (btn.className.includes("keyboard__btn--fn")) {
        const buttonClicked = btn.textContent;

        handler(buttonClicked);
      }
    });
  }

  updateScreen(content) {
    this.screenDisplay.textContent = content;
  }
}

export default new View();
