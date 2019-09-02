import { useState, useEffect } from 'react';
import { Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import Steps from './StepsComp';
import Router from 'next/router';

const SocialInfo = () => {
  const [twitter, setTweeter] = useState('');
  const [google, setGoogle] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [facebook, setFacebook] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    Router.push('/');
  };
  return (
    <Root>
      <Steps stepNumber="5" />
      <Heading2>Add Social Media</Heading2>
      <FormArea onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            type="text"
            placeholder="tweeter handler"
            onChange={e => {
              setTweeter(e.target.value);
            }}
          />
          <i className="fab fa-twitter fa-lg"></i>
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            placeholder="facebook handler"
            onChange={e => {
              setFacebook(e.target.value);
            }}
          />
          <i className="fab fa-facebook fa-lg"></i>
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            placeholder="github handler"
            onChange={e => {
              setGitHub(e.target.value);
            }}
          />
          <i className="fab fa-github fa-lg"></i>
        </InputWrapper>
        <InputWrapper>
          <input
            type="text"
            placeholder="google handler"
            onChange={e => {
              setGoogle(e.target.value);
            }}
          />
          <i className="fab fa-google fa-lg"></i>
        </InputWrapper>
        <Button small primary type="submit">
          Next
        </Button>
        <Skip href="/"></Skip>
      </FormArea>
    </Root>
  );
};

export default SocialInfo;

const Root = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FormArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;

  @media (min-width: 500px) {
    width: 50%;
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

  i {
    position: absolute;
    right: 15%;
    top: 30%;
  }
`;
