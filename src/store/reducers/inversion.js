// @flow

import type { State, Reducer } from '../types';

const inversionReducer: Reducer<void> = (state: State): State => {
  let { firstArgument, secondArgument } = state;
  if (secondArgument) {
    secondArgument = (parseFloat(secondArgument || 0) * (-1)).toString();
  } else {
    firstArgument = (parseFloat(firstArgument || 0) * (-1)).toString();
  }
  return ({
    ...state,
    firstArgument,
    secondArgument,
  });
};

export default inversionReducer;
