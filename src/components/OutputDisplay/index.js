// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { createComponent } from 'effector-react';

import store from '@/store';
import type { State } from '@/store/types';

import styles from './styles';

class OutputDisplay extends React.PureComponent<{ label: string }> {
  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <Text
          style={styles.createForLabel(label)}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {label}
        </Text>
      </View>
    );
  }
}

const MAX_DIGITS = 10;

const SmartOutputDisplay = createComponent<{}, State>(store, (props, state: State) => {
  let label: string = state.secondArgument || state.firstArgument || '0';
  const floatValue = parseFloat(label);

  // cut long labels
  if (Math.abs(floatValue) > 10 ** (MAX_DIGITS - 1)) {
    label = floatValue.toExponential(MAX_DIGITS - 3).toString().replace('+', '');
  } else {
    label = label.substring(0, MAX_DIGITS);
  }
  label = label.replace('.', ',');

  // we don't wanna see ',' if this is very last in long value
  if (label.length === MAX_DIGITS && label[label.length - 1] === ',') {
    label = label.substring(0, label.length - 1);
  }

  return (
    <OutputDisplay label={label} />
  );
});

export default SmartOutputDisplay;
