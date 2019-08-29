import { useState, useEffect } from 'react';
import { Text, Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Steps from './StepsComp';
import Router from 'next/router';

const SocialInfo = () => {
  return (
    <Root>
      <p>SOcial-Info</p>
    </Root>
  );
};

export default SocialInfo;

const Root = styled.div``;
