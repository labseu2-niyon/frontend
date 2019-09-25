import { Form } from 'formik';
import styled from 'styled-components';
import { lighten } from 'polished';

const FormStyles = styled(Form)`
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  div {
    min-height: 65px;
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 5px;
    width: 100%;
    display: block;
    color: #222222;
    border: 2px solid #ededed;
    border-radius: 5px;
    ::placeholder {
      color: #c2c2c2;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  p {
    color: #e29273;
    padding: 2px 0;
    margin: 0;
    align-self: flex-end;
  }

  button {
    width: 100%;
    height: 35px;
    margin-bottom: 20px;
    border-radius: 5px;
    background: #348fbb;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background: ${lighten(0.1, '#348fbb')};
    }
    transition: background 1s ease;
  }

  a {
    align-self: center;
  }
`;

export default FormStyles;
