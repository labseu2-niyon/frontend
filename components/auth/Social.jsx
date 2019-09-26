import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Router, { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Heading2, Text, Button } from '../~common/index';
import StepsComp from './Steps';
import { socialData, saveToken } from '../../redux/actions/authActions';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';

const Social = ({ errors, touched, username, saveToken }) => {
  const nextRouter = useRouter();
  const newToken = nextRouter.query.token;
  if (newToken) {
    const user = jwt.decode(newToken);
    if (username === undefined) {
      username = user.username;
    }
    saveToken(newToken, user.username);
  }
  return (
    <main>
      <StepsComp stepNumber={0} />
      <Card>
        <Content>
          <h4>What's your name?</h4>
          <FormStyles>
            <div className="input-wrapper">
              <Field
                name="username"
                type="text"
                placeholder="username"
                value={username}
                disabled
              />
            </div>
            <div className="input-wrapper">
              <Field name="firstName" type="text" placeholder="First Name" />
              {touched.firstName && errors.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>
            <div className="input-wrapper">
              <Field name="lastName" type="text" placeholder="Last Name" />
              {touched.lastName && errors.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
            <button type="submit">Next</button>
          </FormStyles>
        </Content>
      </Card>
    </main>
  );
};

const FormikWithSocialForm = withFormik({
  mapPropsToValues({ username, firstName, lastName }) {
    return {
      username: username || '',
      firstName: firstName || '',
      lastName: lastName || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string(),
    firstName: Yup.string()
      .matches(/^[a-zA-Z]*$/, {
        message: 'Must contain only letters',
        excludeEmptyString: true
      })
      .required('First Name is required.'),
    lastName: Yup.string()
      .matches(/^[a-zA-Z]*$/, {
        message: 'Must contain only letters',
        excludeEmptyString: true
      })
      .required('Last Name is required.')
  }),
  handleSubmit(values, { props }) {
    props.socialData(values);
    Router.push('/auth/location');
  }
})(Social);

const mapStateToProps = state => ({
  username: state.authReducer.emailData.username
});

const mapDispatchToProps = {
  socialData,
  saveToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikWithSocialForm);
