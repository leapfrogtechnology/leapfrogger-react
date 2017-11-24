import { email } from './../constants/regex';

export const validateEmail = (value) => {
  return email.test(value);
};
