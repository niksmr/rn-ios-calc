// @flow

import React from 'react';
import { View } from 'react-native';
import { createComponent } from 'effector-react';

import store from '@/store';
import type { State } from '@/store';
import {
  inputEvent,
  setOperationEvent,
  inversionEvent,
  resetEvent,
  calculateEvent,
  inputPointEvent,
  OPERATIONS,
} from '@/store/events';
import type { TwoArgsOperation } from '@/store/events';

import { gutter } from '@/config/layout';

import Button from './Button';

const containerStyle = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  paddingTop: gutter,
  flexWrap: 'wrap',
};

const OperationButton = (
  {
    label,
    operation,
    promotedOperation,
  }: {| label: string, operation: TwoArgsOperation, promotedOperation: ?TwoArgsOperation |},
) => (
  <Button
    label={label}
    type={Button.TYPES.OPERATION}
    onPress={() => setOperationEvent(operation)}
    isActive={promotedOperation === operation}
  />
);

const InputButton = (
  {
    digit,
    ...props
  }: { digit: number },
) => (
  <Button
    label={digit.toString()}
    type={Button.TYPES.INPUT}
    onPress={() => inputEvent(digit.toString())}
    {...props}
  />
);

export default createComponent<{}, State>(store, (props, state: State) => (
  <View style={containerStyle}>
    <Button
      label="C"
      type={Button.TYPES.ACTION}
      onPress={resetEvent}
    />
    <Button
      label="±"
      type={Button.TYPES.ACTION}
      onPress={inversionEvent}
    />
    <Button label="%" type={Button.TYPES.ACTION} />
    <OperationButton
      label="÷"
      operation={OPERATIONS.DIVIDE}
      promotedOperation={state.promotedOperation}
    />

    <InputButton digit={7} />
    <InputButton digit={8} />
    <InputButton digit={9} />
    <OperationButton
      label="×"
      operation={OPERATIONS.MULTIPLY}
      promotedOperation={state.promotedOperation}
    />

    <InputButton digit={4} />
    <InputButton digit={5} />
    <InputButton digit={6} />
    <OperationButton
      label="-"
      operation={OPERATIONS.MINUS}
      promotedOperation={state.promotedOperation}
    />

    <InputButton digit={1} />
    <InputButton digit={2} />
    <InputButton digit={3} />
    <OperationButton
      label="+"
      operation={OPERATIONS.PLUS}
      promotedOperation={state.promotedOperation}
    />

    <InputButton digit={0} widthNumber={2} />
    <Button
      label=","
      type={Button.TYPES.INPUT}
      onPress={inputPointEvent}
    />
    <Button
      label="="
      type={Button.TYPES.OPERATION}
      onPress={calculateEvent}
    />
  </View>
));
