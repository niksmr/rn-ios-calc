// @flow

import React from 'react';
import {
  View, Text, Dimensions, TouchableOpacity, StyleSheet,
} from 'react-native';

import { gutter } from '@/config/layout';
import theme from '@/config/theme';

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

const backgroundStyleDefault = {
  position: 'absolute',
  left: StyleSheet.hairlineWidth,
  right: StyleSheet.hairlineWidth,
  top: StyleSheet.hairlineWidth,
  bottom: StyleSheet.hairlineWidth,
  borderRadius: buttonSize / 2,
  backgroundColor: theme.text,
};

const touchableOpacityStyleDefault = {
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

const labelStyleDefault = {
  fontSize: 34,
  color: theme.buttons.input.text,
};

/**
 * action: clear, ...
 * operation: *, +, ...
 * input: 1, 2, 3, ...
 */
const ButtonTypes = {
  ACTION: 'action',
  OPERATION: 'operation',
  INPUT: 'input',
};

type ButtonType = $Values<typeof ButtonTypes>;

export type Props = {|
  label: string,
  widthNumber?: number,
  type: ButtonType,
  isActive?: boolean,
  onPress?: ?() => mixed,
|};

export default class Button extends React.PureComponent<Props> {
  static defaultProps = {
    widthNumber: 1,
    onPress: null,
    isActive: false,
  }

  static TYPES = ButtonTypes;

  containerStyle = () => {
    const computedStyle = { ...containerStyleDefault };

    const { widthNumber } = this.props;
    if (widthNumber && widthNumber > 1) {
      const additionalWidth = (buttonSize + gutter) * (widthNumber - 1);
      computedStyle.width = buttonSize + additionalWidth;
      computedStyle.paddingRight = additionalWidth;
    }

    return computedStyle;
  }

  touchableOpacityStyle = () => {
    const computedStyle = { ...touchableOpacityStyleDefault };
    return computedStyle;
  }

  innerContainerStyle = (isActive: boolean = false) => {
    const computedStyle = { ...innerContainerStyleDefault };

    const { widthNumber } = this.props;
    if (widthNumber && widthNumber > 1) {
      const additionalWidth = (buttonSize + gutter) * (widthNumber - 1);
      computedStyle.paddingRight = additionalWidth;
    }

    const { type } = this.props;
    const colors = theme.buttons[type];
    computedStyle.backgroundColor = isActive ? colors.text : colors.background;

    return computedStyle;
  }

  labelStyle = (isActive: boolean = false) => {
    const computedStyle = { ...labelStyleDefault };

    const { type } = this.props;
    const colors = theme.buttons[type];
    computedStyle.color = isActive ? colors.background : colors.text;

    return computedStyle;
  }

  onPress = () => {
    const { onPress: onPressProp } = this.props;
    if (onPressProp) {
      onPressProp();
    }
  }

  render() {
    const { label, isActive } = this.props;

    return (
      <View style={this.containerStyle()}>
        <View style={backgroundStyleDefault} />
        <TouchableOpacity
          style={touchableOpacityStyleDefault}
          activeOpacity={0.7}
          onPress={this.onPress}
        >
          <View style={this.innerContainerStyle(isActive)}>
            <Text style={this.labelStyle(isActive)}>{label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
