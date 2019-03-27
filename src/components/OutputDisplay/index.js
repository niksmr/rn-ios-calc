// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { createComponent } from 'effector-react';

import store from '@/store';
import type { State } from '@/store';

import styles from './styles';

class OutputDisplay extends React.PureComponent<{ label: string }> {
  render() {
    const { label } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  }
}

const SmartOutputDisplay = createComponent<{}, State>(store, (props, state: State) => {
  let label = state.secondArgument || state.firstArgument || '0';
  label = label.replace('.', ',').substring(0, 6);
  return (
    <OutputDisplay label={label} />
  );
});

export default SmartOutputDisplay;
