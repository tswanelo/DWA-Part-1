// reducer.js
import { MAX_NUMBER, MIN_NUMBER } from './main.js';

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return { count: Math.min(state.count + 1, MAX_NUMBER) };
    case 'SUBTRACT':
      return { count: Math.max(state.count - 1, MIN_NUMBER) };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};
