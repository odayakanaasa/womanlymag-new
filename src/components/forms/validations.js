import validator from 'validator';

export const isRequired = value => ({
  error: !value ? 'Required' : null,
});

export const isEmail = value => ({
  error:
    !value || !validator.isEmail(value)
      ? 'Must be a valid email address.'
      : null,
});
