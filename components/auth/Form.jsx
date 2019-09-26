import { Form } from 'formik';
import styled from 'styled-components';
import { lighten } from 'polished';

const FormStyles = styled(Form)`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;

  .input-wrapper {
    min-height: 65px;
    display: flex;
    flex-direction: column;
    position: relative;

    i {
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 8px;
    color: #348fbb;
  }
  }

  input, select {
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

.error {
    color: #e29273;
    padding: 2px 0;
    margin: 0;
    align-self: flex-end;
  }

  button {
    width: 100%;
    height: 35px;
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
    margin: 20px 0;
  }

  textarea {
    margin-bottom: 20px;
    padding: 0.5rem;
    width: 100%;
    height: 120px;
    display: block;
    color: #4d2d52;
    border: 2px solid #ededed;
    border-radius: 4px;
    ::placeholder {
        color: #c2c2c2;
    }
`;

export default FormStyles;
