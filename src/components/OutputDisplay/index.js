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


const SmartOutputDisplay = createComponent<{}, State>(store, (props, state: State) => {
  let label: string = state.secondArgument || state.firstArgument || '0';
  label = label.replace('.', ',').substring(0, 12);
  return (
    <OutputDisplay label={label} />
  );
});

export default SmartOutputDisplay;
