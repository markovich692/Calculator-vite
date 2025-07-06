export const state = {
  digitCurrent: "",
  valueCurrent: 0,
  operatorCurrent: null,
  peratorUpdated: null,
};

export const stateValuesUpdated = function (newDigit) {
  if (state.digitCurrent.length < 13) {
    state.digitCurrent = state.digitCurrent + newDigit;
    state.valueCurrent = Number(digitCurrent);
  }
};
