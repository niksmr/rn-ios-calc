// @flow

import type { ApplicationTheme } from '../types';

import colors from './colors';

const {
  black,
  white,
  yellow,
  grayLight,
  grayDark,
} = colors;

const theme: ApplicationTheme = {
  isLight: false,
  background: black,
  text: white,
  buttons: {
    action: {
      text: black,
      background: grayLight,
    },
    operation: {
      text: white,
      background: yellow,
    },
    input: {
      text: white,
      background: grayDark,
    },
  },
};

export default theme;
