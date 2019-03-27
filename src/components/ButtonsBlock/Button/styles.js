// @flow

import {
  Dimensions, StyleSheet,
} from 'react-native';

import { gutter } from '@/config/layout';
import theme from '@/config/theme';

import { type ButtonType } from './types';

const appWidth: number = parseInt(Dimensions.get('window').width, 10);
const buttonsPerRow: number = 4;
const buttonSize: number = (appWidth - gutter * (buttonsPerRow + 1)) / buttonsPerRow;

const containerStyleDefault = {
  paddingRight: 0,
  width: buttonSize,
  height: buttonSize,
  borderRadius: buttonSize / 2,
  marginLeft: gutter,
  marginBottom: gutter,
  alignItems: 'center',
  justifyContent: 'center',
};


export const createForContainer = ({ widthNumber }: { widthNumber?: number }) => {
  const computedStyle = { ...containerStyleDefault };

  if (widthNumber && widthNumber > 1) {
    const additionalWidth = (buttonSize + gutter) * (widthNumber - 1);
    computedStyle.width = buttonSize + additionalWidth;
    computedStyle.paddingRight = additionalWidth;
  }

  return computedStyle;
};

export const background = {
  position: 'absolute',
  left: StyleSheet.hairlineWidth,
  right: StyleSheet.hairlineWidth,
  top: StyleSheet.hairlineWidth,
  bottom: StyleSheet.hairlineWidth,
  borderRadius: buttonSize / 2,
  backgroundColor: theme.text,
};

export const touchable = {
  ...StyleSheet.absoluteFill,
  borderRadius: buttonSize / 2,
  alignItems: 'center',
  justifyContent: 'center',
};

const innerContainerStyleDefault = {
  ...StyleSheet.absoluteFill,
  backgroundColor: theme.buttons.input.background,
  borderRadius: buttonSize / 2,
  alignItems: 'center',
  justifyContent: 'center',
};

export const createForInnerContainer = ({
  isActive,
  widthNumber,
  type,
}: {
  isActive?: boolean,
  widthNumber?: number,
  type: ButtonType,
}) => {
  const computedStyle = { ...innerContainerStyleDefault };

  if (widthNumber && widthNumber > 1) {
    const additionalWidth = (buttonSize + gutter) * (widthNumber - 1);
    computedStyle.paddingRight = additionalWidth;
  }

  const colors = theme.buttons[type];
  computedStyle.backgroundColor = isActive ? colors.text : colors.background;

  return computedStyle;
};

const labelStyleDefault = {
  fontSize: 34,
  color: theme.buttons.input.text,
};

export const createForLabel = ({ isActive, type }: { isActive?: boolean, type: ButtonType }) => {
  const computedStyle = { ...labelStyleDefault };

  const colors = theme.buttons[type];
  computedStyle.color = isActive ? colors.background : colors.text;

  return computedStyle;
};
