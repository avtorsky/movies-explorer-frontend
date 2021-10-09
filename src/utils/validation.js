import { minInputLength, maxInputLength } from '../utils/constants';

export const validateInput = (validator, inputName) => {
  return Object.keys(validator)
    .map((errorKey) => {
      const errorResult = validator[errorKey](inputName);
      return { [errorKey]: errorResult };
    })
    .reduce((acc, item) => ({ ...acc, ...item }), {});
};
export const validator = {
  name: {
    minInputLength: (value) => value.length < minInputLength,
    maxInputLength: (value) => value.length > maxInputLength,
    required: (value) => value === '',
  },
  email: {
    email: (value) => !/\S+@\S+\.\S+/gm.test(value),
    required: (value) => value === '',
  },
  password: {
    minInputLength: (value) => value.length < minInputLength,
    required: (value) => value === '',
  },
  search: {
    required: (value) => value === '',
  },
};