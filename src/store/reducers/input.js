// @flow

import type { State, Reducer } from '../types';

const inputReducer: Reducer<string> = (state: State, input: string): State => {
  let { firstArgument, secondArgument } = state;
  const { promotedOperation } = state;
  if (promotedOperation) {
    if (input !== '0' || (secondArgument !== '0')) { // prevent 00000000
      secondArgument = secondArgument ? secondArgument + input : input;
    }
  } else if (input !== '0' || (firstArgument !== null && firstArgument !== '0')) { // prevent 00000000
    firstArgument = firstArgument ? firstArgument + input : input;
  }
  return ({
    ...state,
    firstArgument,
    secondArgument,
  });
};

export default inputReducer;
