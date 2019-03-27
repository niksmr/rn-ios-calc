// @flow

import { OPERATIONS, defaultState } from '../types';
import type { State, Reducer } from '../types';

const doCalculationReducer: Reducer<void> = (state: State): State => {
  const a = parseFloat(state.firstArgument || 0);
  const b = parseFloat(state.secondArgument || 0);
  let result: number = 0;
  switch (state.promotedOperation) {
    case OPERATIONS.PLUS:
      result = a + b;
      break;
    case OPERATIONS.MINUS:
      result = a - b;
      break;
    case OPERATIONS.MULTIPLY:
      result = a * b;
      break;
    case OPERATIONS.DIVIDE:
      result = a / b;
      break;
    default:
  }
  return {
    ...state,
    ...defaultState,
    firstArgument: result.toString(),
  };
};

export default doCalculationReducer;
