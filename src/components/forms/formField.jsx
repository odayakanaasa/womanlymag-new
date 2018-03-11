import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Field } from 'react-form';
import styled from 'styled-components';
import { rem } from 'polished';
import Label from './label';
import ErrorMessage from './errorMessage';

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column wrap;
  align-items: stretch;
  margin-bottom: ${rem('15px')};
`;

const Group = styled.div`
  display: flex;
  flex-flow: ${props => (props.addOn ? 'row wrap' : 'column wrap')};
`;

const FormField = ({ addOn, label, name, render, required, validate }) => (
  <Container>
    <Label
      htmlFor={name}
      required={required}
      text={_.get(label, 'text', '')}
      hidden={_.get(label, 'hidden', false)}
    />
    <Field validate={validate} field={name}>
      {fieldApi => (
        <React.Fragment>
          <Group addOn={addOn}>
            {render(fieldApi)}
            {addOn}
          </Group>
          {fieldApi.error ? <ErrorMessage text={fieldApi.error} /> : null}
        </React.Fragment>
      )}
    </Field>
  </Container>
);

FormField.defaultProps = {
  addOn: null,
  required: false,
  validate: null,
};

FormField.propTypes = {
  addOn: PropTypes.element,
  label: PropTypes.shape({
    hidden: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validate: PropTypes.func,
};

export default FormField;
