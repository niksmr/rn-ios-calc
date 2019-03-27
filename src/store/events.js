// @flow

import { createEvent } from 'effector';

import type { TwoArgsOperation } from './types';

export const inputEvent = createEvent<string>('input');
export const inversionEvent = createEvent<void>('inversion');
export const setOperationEvent = createEvent<TwoArgsOperation>('set-operation');
export const calculateEvent = createEvent<void>('calculate');
export const inputPointEvent = createEvent<void>('input-point');
export const resetEvent = createEvent<void>('reset');
