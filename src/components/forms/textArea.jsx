import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { rem } from 'polished';
import { StyledInput } from './input';
import FormField from './formField';

const StyledTextArea = StyledInput.extend`
  resize: none;
  padding: ${rem('15px')} ${rem('10px')};
`;

const TextArea = ({ label, name, required, validate }) => (
  <FormField
    label={label}
    name={name}
    required={required}
    validate={validate}
    render={({ value, error, setValue, setTouched }) => (
      <StyledTextArea
        error={error}
        value={_.get(value, '')}
        onChange={e => {
          setValue(e.target.value);
        }}
        onBlur={() => setTouched()}
        name={name}
        required={required}
      />
    )}
  />
);

TextArea.defaultProps = {
  required: false,
  validate: null,
};

TextArea.propTypes = {
  label: PropTypes.shape({
    hidden: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validate: PropTypes.func,
};

export default TextArea;
