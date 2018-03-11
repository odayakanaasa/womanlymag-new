import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Form as ReactForm } from 'react-form';
/* eslint-disable import/no-unresolved */
import ErrorMessage from 'components/forms/errorMessage';
/* eslint-enable import/no-unresolved */

class Form extends Component {
  state = {
    error: null,
    submitted: false,
  };

  handleSubmit = values => {
    const { name, onSubmit } = this.props;

    if (onSubmit) {
      return onSubmit(values);
    }

    return fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify({
        'form-name': name,
        ...values,
      }),
    })
      .then(() => {
        this.setState({
          submitted: true,
        });
      })
      .catch(error => {
        this.setState({
          error,
          submitted: false,
        });
      });
  };

  render() {
    const { children, isNetlifyForm, name, successText } = this.props;
    return (
      <React.Fragment>
        {this.state.error && <ErrorMessage text={this.state.error} />}
        {this.state.submitted && <div>{successText}</div>}
        {!this.state.submitted && (
          <ReactForm onSubmit={this.handleSubmit}>
            {formApi => (
              <form
                onSubmit={formApi.submitForm}
                netlify={isNetlifyForm}
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name={name} value={name} />
                {isNetlifyForm && (
                  <p hidden>
                    <label htmlFor="bot-field">
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                )}
                {React.Children.map(children, child => child)}
              </form>
            )}
          </ReactForm>
        )}
      </React.Fragment>
    );
  }
}

Form.defaultProps = {
  isNetlifyForm: false,
  onSubmit: null,
  successText: '',
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  isNetlifyForm: PropTypes.bool,
  onSubmit: PropTypes.func,
  successText: PropTypes.string,
};

export default Form;
