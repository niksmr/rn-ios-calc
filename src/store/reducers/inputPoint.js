// @flow

import type { State, Reducer } from '../types';

const inputPointReducer: Reducer<void> = (state: State): State => {
  let { firstArgument, secondArgument } = state;
  if (state.promotedOperation && !secondArgument) {
    secondArgument = '0.';
  } else if (secondArgument) {
    if (secondArgument.indexOf('.') === -1) {
      secondArgument += '.';
    }
  } else if (!firstArgument) {
    firstArgument = '0.';
  } else if (firstArgument.indexOf('.') === -1) {
    firstArgument += '.';
  }
  return ({
    ...state,
    firstArgument,
    secondArgument,
  });
};

export default inputPointReducer;
