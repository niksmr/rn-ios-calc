// @flow

import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

import * as styles from './styles';
import ButtonTypes, { type ButtonType } from './types';

/* eslint-disable react/no-unused-prop-types */
/**
 * Eslint doesn't check if we use prop outside of this .js file
 */
export type Props = {|
  label: string,
  widthNumber?: number,
  type: ButtonType,
  isActive?: boolean,
  onPress?: ?() => mixed,
|};
/* eslint-enable react/no-unused-prop-types */

export default class Button extends React.PureComponent<Props> {
  static defaultProps = {
    widthNumber: 1,
    onPress: null,
    isActive: false,
  }

  static TYPES = ButtonTypes;

  onPress = () => {
    const { onPress: onPressProp } = this.props;
    if (onPressProp) {
      onPressProp();
    }
  }

  render() {
    const { label } = this.props;

    return (
      <View style={styles.createForContainer(this.props)}>
        <View style={styles.background} />
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
          onPress={this.onPress}
        >
          <View style={styles.createForInnerContainer(this.props)}>
            <Text style={styles.createForLabel(this.props)}>{label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
