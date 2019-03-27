// @flow

import { StyleSheet, Dimensions, Platform } from 'react-native';

import { gutter } from '@/config/layout';
import theme from '@/config/theme';

const container = {
  paddingHorizontal: gutter,
};

const appWidth: number = parseInt(Dimensions.get('window').width, 10);

const labelDefault = {
  color: theme.text,
  textAlign: 'right',
  fontSize: 100,
  fontWeight: '200',
};

/**
 * modify fontSize to keep label to render single line
 * android doesn't support adjustsFontSizeToFit
 * */
const createForLabel = (label: string) => {
  if (Platform.OS === 'ios' || label.length < 4) {
    return labelDefault;
  }
  // 375 points contains ~ 12 chars at 50pt
  const fontSize = 50 * (appWidth / 375) * (12 / label.length);
  if (fontSize > labelDefault.fontSize) {
    return labelDefault;
  }

  return {
    ...labelDefault,
    fontSize,
  };
};

const styles = StyleSheet.create({
  container,
});

styles.createForLabel = createForLabel;

export default styles;
