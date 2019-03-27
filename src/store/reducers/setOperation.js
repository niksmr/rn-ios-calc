// @flow

import type { State, Reducer, TwoArgsOperation } from '../types';

const setOperationReducer: Reducer<TwoArgsOperation> = (
  state: State,
  promotedOperation: TwoArgsOperation,
): State => ({
  ...state,
  promotedOperation,
});

export default setOperationReducer;
