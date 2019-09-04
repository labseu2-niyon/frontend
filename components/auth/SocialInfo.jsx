import { useState, useEffect } from 'react';
import { Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import Steps from './StepsComp';
import Router from 'next/router';
import { connect } from 'react-redux';
import { socialData } from '../../redux/actions/authActions';

const SocialInfo = ({ socialData }) => {
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTweeter] = useState('');
  const [gitHub, setGitHub] = useState('');

  //console.log(userInfo.emailData);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      facebook,
      linkedin,
      twitter
    };
    socialData(data);
    Router.push('/');
  };
  return (
    <Root>
      <Steps stepNumber="5" />
      <Heading2 primary>Add Social Media</Heading2>
      <FormArea onSubmit={handleSubmit}>
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
            placeholder="linkedin handler"
            onChange={e => {
              setLinkedin(e.target.value);
            }}
          />
          <i className="fab fa-linkedin fa-lg"></i>
        </InputWrapper>
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
            placeholder="github handler"
            onChange={e => {
              setGitHub(e.target.value);
            }}
          />
          <i className="fab fa-github fa-lg"></i>
        </InputWrapper>

        <Button small primary type="submit">
          Next
        </Button>
        <Skip href="/"></Skip>
      </FormArea>
    </Root>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.authReducer
  };
};

export default connect(
  mapStateToProps,
  { socialData }
)(SocialInfo);

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
