// @flow

import { createStore } from 'effector';

import {
  inputEvent,
  resetEvent,
  inversionEvent,
  setOperationEvent,
  calculateEvent,
  inputPointEvent,
} from './events';

import {
  inputReducer,
  inputPointReducer,
  inversionReducer,
  setOperationReducer,
  doCalculationReducer,
} from './reducers';

import { defaultState } from './types';
import type { State } from './types';

const store = createStore<State>(defaultState);

store
  .on(inputEvent, inputReducer)
  .on(inputPointEvent, inputPointReducer)
  .on(inversionEvent, inversionReducer)
  .on(setOperationEvent, setOperationReducer)
  .on(calculateEvent, doCalculationReducer)
  .reset(resetEvent);

export default store;
