// @flow

import type { State, Reducer } from '../types';

const handleInputPointToArgument = (oldValue: ?string): ?string => {
  if (!oldValue) return '0.';
  if (oldValue.indexOf('.') === -1) {
    return `${oldValue}.`;
  }
  return oldValue;
};

const inputPointReducer: Reducer<void> = (state: State): State => {
  let firstArgument = state.firstArgument || null;
  let secondArgument = state.secondArgument || null;

  if (!state.promotedOperation) {
    firstArgument = handleInputPointToArgument(firstArgument);
  } else {
    secondArgument = handleInputPointToArgument(secondArgument);
  }
  return ({
    ...state,
    firstArgument,
    secondArgument,
  });
};

export default inputPointReducer;
