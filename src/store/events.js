// @flow

import { createEvent } from 'effector';

export const OPERATIONS = {
  PLUS: 'plus',
  MINUS: 'minus',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
};

export type TwoArgsOperation = $Values<typeof OPERATIONS>;

export const inputEvent = createEvent<string>('input');
export const inversionEvent = createEvent<void>('inversion');
export const setOperationEvent = createEvent<TwoArgsOperation>('set-operation');
export const calculateEvent = createEvent<void>('calculate');
export const inputPointEvent = createEvent<void>('input-point');
export const resetEvent = createEvent<void>('reset');
