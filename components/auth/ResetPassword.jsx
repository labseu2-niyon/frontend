import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { connect } from 'react-redux';
import Flip from 'react-reveal/Flip';
import { Heading2, Text, Button } from '../~common/index';
import { resetPassword } from '../../redux/actions/authActions';
import { theme } from '../../lib/theme';

const ResetPassword = ({ errors, touched, status, loading }) => (
  <>
    <Root>
      <Flip left>
        <Logo>
          <a href="https://niyon.now.sh/">
            <Pulse>
              <svg width={50} height={50} viewBox="0 0 147 147" fill="none">
                <path
                  d="M89.03 79.442c3.961 3.85 10.292 3.759 14.141-.202 3.849-3.96 3.759-10.292-.202-14.14L89.031 79.441zm-32.959 48.9c3.905-3.906 3.905-10.237 0-14.142-3.905-3.906-10.237-3.906-14.142 0l14.142 14.142zm-25.394-3.382c-1.392 1.299-4.336 2.039-6.196 1.335-.534-.203-4.481-1.779-4.481-13.524H0c0 16.254 6.053 27.928 17.394 32.226 10.015 3.795 20.821.285 26.93-5.416L30.676 124.96zM20 112.771v-85H0v85h20zm0-85c0-2.146 1.631-4.996 3.818-6.043.84-.402 1.938-.637 3.539-.228 1.723.439 4.49 1.76 8.072 5.342L49.571 12.7C38.551 1.679 25.997-1.49 15.182 3.688 5.62 8.266 0 18.416 0 27.771h20zm15.429-.93c9.044 9.045 22.456 22.206 33.58 33.08a11226.016 11226.016 0 0018.457 18l1.16 1.127.301.294.077.075c.01.008.016.014.02.019l.005.004.001.002L96 72.27l6.969-7.172-.001-.001-.005-.005-.019-.018-.076-.074-.3-.292-1.156-1.124-4.263-4.15c-3.606-3.512-8.602-8.383-14.159-13.815C71.865 34.744 58.527 21.655 49.571 12.7L35.43 26.842zm8.894 112.74a673.794 673.794 0 008.694-8.249 373.741 373.741 0 003.048-2.984l.004-.004.001-.001v-.001L49 121.271c-7.071-7.071-7.07-7.072-7.07-7.072 0-.001 0 0 0 0a.03.03 0 01-.006.005l-.028.028-.126.125-.526.521c-.473.465-1.188 1.164-2.136 2.082a651.781 651.781 0 01-8.431 8l13.646 14.621zM57.47 68.13c-3.961-3.848-10.292-3.758-14.141.203-3.85 3.96-3.759 10.291.202 14.14l13.938-14.342zm32.959-48.899c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0L90.429 19.231zm25.394 3.382c1.392-1.3 4.336-2.04 6.196-1.335.534.203 4.481 1.779 4.481 13.524h20c0-16.255-6.053-27.928-17.394-32.226-10.015-3.795-20.821-.285-26.929 5.416l13.646 14.62zm10.677 12.19v84.999h20v-85h-20zm0 84.999c0 2.146-1.631 4.996-3.818 6.043-.839.402-1.938.637-3.539.228-1.723-.439-4.49-1.76-8.072-5.342l-14.142 14.142c11.021 11.021 23.574 14.188 34.389 9.011 9.563-4.578 15.182-14.727 15.182-24.082h-20zm-15.429.929c-9.044-9.045-22.456-22.205-33.58-33.08a11147.201 11147.201 0 00-19.617-19.127l-.302-.293-.077-.075-.019-.019-.005-.005h-.001l-6.97 7.17a17146.894 17146.894 0 00-6.968 7.173l.005.005.019.018.076.074.3.292a8279.11 8279.11 0 015.419 5.273c3.606 3.513 8.602 8.384 14.159 13.816 11.125 10.875 24.464 23.965 33.419 32.92l14.142-14.142zm-8.894-112.74a667.432 667.432 0 00-8.694 8.25 375.705 375.705 0 00-2.84 2.777l-.153.152a11.915 11.915 0 01-.059.059l-.001.001s-.001.001 7.07 7.072l7.071 7.072h-.001.001l.005-.006.028-.028.126-.125.526-.52c.473-.465 1.188-1.164 2.136-2.082a643.787 643.787 0 018.431-8L102.177 7.992z"
                  fill="#222222"
                />
              </svg>
            </Pulse>
          </a>
        </Logo>
      </Flip>
      <TopWrapper>
        <Heading2 primary>Let's find your account.</Heading2>
        <Text small>Please enter your email.</Text>
      </TopWrapper>
      <FormArea>
        <InputWrapper>
          <Field name="email" type="email" placeholder="email" />
          {touched.email && errors.email && <Error>{errors.email}</Error>}
          {status && status.msg && <Error>{status.msg}</Error>}
        </InputWrapper>
        <ButtonArea>
          <Button large primary loadingB={loading} type="submit">
            Find Account
          </Button>
          <Link href="/auth/login">
            <a>
              <Button large secondary>
                Go Back
              </Button>
            </a>
          </Link>
        </ButtonArea>
      </FormArea>
    </Root>
  </>
);

const FormikResetPasswordForm = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
  }),
  handleSubmit(values, { props, setStatus }) {
    const { email } = values;
    props.resetPassword({ email, props }).then(res => {
      setStatus({ msg: res });
    });
  }
})(ResetPassword);

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    error: state.authReducer.error,
    loading: state.authReducer.loading
  };
}

export default connect(
  mapStateToProps,
  { resetPassword }
)(FormikResetPasswordForm);

const Root = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-center;
  height: 40%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mobileWidth}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 30%;
  }

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 70%;
    display: block;
    color: #4d2d52;
    border: 1px solid rgba(77, 45, 82, 0.8);
    border-radius: 4px;
    ::placeholder {
      color: grey;
      opacity: 0.4;
    }
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
`;

const Error = styled.p`
  margin: 0;
  font-size: 14px;
  position: absolute;
  bottom: 10%;
  left: 15%;
  color: ${({ theme }) => theme.errorOrange};
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 320px;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    text-align: center;
  }
`;

const Logo = styled.div`
  margin-top: 50px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

const Pulse = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background: ${theme.secondary};
  cursor: pointer;
  box-shadow:60px -16px teal;
  animation: pulse 2s infinite;
  display:flex;
  justify-content:center;
  align-items:center;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.8);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(404,269,144, 112);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(504,269,44, 12);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 10px 1px 40px rgba(0,0,0,0.8);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 3px 3px rgba(0,0,0,0.8);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 1px 2px 10px 10px rgba(404,369,404, 0);
      
  }
`;
