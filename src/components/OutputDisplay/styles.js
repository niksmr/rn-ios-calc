// @flow

import { StyleSheet } from 'react-native';

import { gutter } from '@/config/layout';
import theme from '@/config/theme';

const container = {
  paddingRight: gutter,
};

const label = {
  color: theme.text,
  fontSize: 100,
  fontWeight: '200',
};

export default StyleSheet.create({
  container,
  label,
});
