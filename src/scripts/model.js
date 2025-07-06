export const state = {
  digitCurrent: "",
  valueCurrent: 0,
  operatorCurrent: null,
  peratorUpdated: null,
};

export const stateValuesUpdated = function (newDigit) {
  if (state.digitCurrent.length > 12) return;

  //updates the digitCurrent
  state.digitCurrent = state.digitCurrent + newDigit;

  //Updates the valueCurrent
  state.valueCurrent = Number(state.digitCurrent);
};
