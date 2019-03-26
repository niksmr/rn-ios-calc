// @flow

import React from 'react';
import { StatusBar, View } from 'react-native';

import theme from './config/theme';

import OutputDisplay from './components/OutputDisplay';
import ButtonsBlock from './components/ButtonsBlock';


const containerStyle = {
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  backgroundColor: theme.background,
};

const barStyle = !theme.isLight ? 'light-content' : 'dark-content';

export default () => (
  <View style={containerStyle}>
    <StatusBar
      barStyle={barStyle}
    />
    <OutputDisplay />
    <ButtonsBlock />
  </View>
);
