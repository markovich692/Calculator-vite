class View {
  calcKeyboardButtons = document.querySelector(".keyboard__buttons");
  screenDisplay = document.querySelector(".screen__display-text");

  renderContent(handler) {
    this.calcKeyboardButtons.addEventListener("click", function (e) {
      const btn = e.target;

      if (!btn) return;

      if (btn.className.includes("keyboard__btn--digit")) {
        const digitClicked = btn.textContent;

        handler(digitClicked);
      }
    });
  }

  updateScreen(content) {
    this.screenDisplay.textContent = content;
  }
}

export default new View();
