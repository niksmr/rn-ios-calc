// @flow

import type { State, Reducer } from '../types';

const handleInputToArgument = (oldValue: ?string, input: string): ?string => {
  if (input === '0' && (oldValue === '0' || oldValue === null)) return '0';
  if (oldValue === '0') return input;
  return (oldValue || '') + input;
};

const inputReducer: Reducer<string> = (state: State, input: string): State => {
  let firstArgument = state.firstArgument || null;
  let secondArgument = state.secondArgument || null;

  const { promotedOperation } = state;
  if (!promotedOperation) {
    firstArgument = handleInputToArgument(firstArgument, input);
  } else {
    secondArgument = handleInputToArgument(secondArgument, input);
  }
  return ({
    ...state,
    firstArgument,
    secondArgument,
  });
};

export default inputReducer;
