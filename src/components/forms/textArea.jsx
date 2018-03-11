import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { rem } from 'polished';
import { StyledInput } from './input';
import FormField from './formField';

const styles = StyledInput.extend`
  resize: none;
  padding: ${rem('15px')} ${rem('10px')};
`;

const StyledTextArea = styles.withComponent('textarea');

const TextArea = ({ label, name, placeholder, required, validate }) => (
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
        placeholder={placeholder}
        required={required}
      />
    )}
  />
);

TextArea.defaultProps = {
  placeholder: '',
  required: false,
  validate: null,
};

TextArea.propTypes = {
  label: PropTypes.shape({
    hidden: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  validate: PropTypes.func,
};

export default TextArea;
