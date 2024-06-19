// main.js
import { createStore } from './store.js';
import { counterReducer } from './reducer.js';
import { subtractHandler, addHandler, resetHandler } from './handlers.js';

export const MAX_NUMBER = 10;
export const MIN_NUMBER = -10;
export const STEP_AMOUNT = 1; 

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key="reset"]');

const store = createStore(counterReducer);

const render = () => {
  const state = store.getState();
  number.value = state.count;
  subtract.disabled = state.count <= MIN_NUMBER;
  add.disabled = state.count >= MAX_NUMBER;
  console.log(`The state is now: ${state.count}`);
};

store.subscribe(render);

subtract.addEventListener('click', () => store.dispatch({ type: 'SUBTRACT' }));
add.addEventListener('click', () => store.dispatch({ type: 'ADD' }));
reset.addEventListener('click', () => store.dispatch({ type: 'RESET' }));

render();
