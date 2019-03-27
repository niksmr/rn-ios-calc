// @flow

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

export default ButtonTypes;

export type ButtonType = $Values<typeof ButtonTypes>;
