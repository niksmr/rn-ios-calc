// @flow

import { createStore } from 'effector';
import {
  inputEvent,
  resetEvent,
  inversionEvent,
  setOperationEvent,
  calculateEvent,
  inputPointEvent,
  OPERATIONS,
} from './events';
import type { TwoArgsOperation } from './events';

export type State = {|
  firstArgument: ?string,
  secondArgument: ?string,
  promotedOperation: ?TwoArgsOperation,
|};

const defaultState: State = {
  firstArgument: null,
  secondArgument: null,
  promotedOperation: null,
};

const store = createStore<State>(defaultState);

store
  .on(inputEvent, (state: State, input): State => {
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
  })
  .on(inputPointEvent, (state: State): State => {
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
  })
  .on(inversionEvent, (state: State): State => {
    let { firstArgument, secondArgument } = state;
    if (secondArgument) {
      secondArgument = (parseFloat(secondArgument) * (-1)).toString();
    } else {
      firstArgument = (parseFloat(firstArgument) * (-1)).toString();
    }
    return ({
      ...state,
      firstArgument,
      secondArgument,
    });
  })
  .on(setOperationEvent, (state: State, promotedOperation: TwoArgsOperation): State => ({
    ...state,
    promotedOperation,
  }))
  .on(calculateEvent, (state: State): State => {
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
  })
  .reset(resetEvent);

export default store;
