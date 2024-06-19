// handlers.js
import { STEP_AMOUNT, MIN_NUMBER, MAX_NUMBER } from './main.js';

export const subtractHandler = (number, subtract, add) => {
  const updatedValue = parseInt(number.value) - STEP_AMOUNT;
  number.value = updatedValue;

  if (add.disabled) {
    add.disabled = false;
  }

  if (updatedValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

export const addHandler = (number, subtract, add) => {
  const updatedValue = parseInt(number.value) + STEP_AMOUNT;
  number.value = updatedValue;

  if (subtract.disabled) {
    subtract.disabled = false;
  }

  if (updatedValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

export const resetHandler = (number, subtract, add) => {
  number.value = 0;
  subtract.disabled = true;
  add.disabled = false;
  alert("The counter has been reset.");
};
