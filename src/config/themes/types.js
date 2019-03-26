// @flow

export type Color = string;

export type ColorMap = {
  [key: string]: Color,
};

export type ButtonTheme = {|
  text: Color,
  background: Color,
|};

export type ApplicationTheme = {|
  isLight: boolean,
  background: Color,
  text: Color,
  buttons: {
    action: ButtonTheme,
    operation: ButtonTheme,
    input: ButtonTheme,
  },
|};
