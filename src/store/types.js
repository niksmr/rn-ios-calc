// @flow

export const OPERATIONS = {
  PLUS: 'plus',
  MINUS: 'minus',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
};

export type TwoArgsOperation = $Values<typeof OPERATIONS>;
export type State = {|
  firstArgument: ?string,
  secondArgument: ?string,
  promotedOperation: ?TwoArgsOperation,
|};

export const defaultState: State = {
  firstArgument: null,
  secondArgument: null,
  promotedOperation: null,
};

export type Reducer<T> = (s: State, payload: T) => State;
