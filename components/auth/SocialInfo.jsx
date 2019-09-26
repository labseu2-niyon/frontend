import { useState, useEffect } from 'react';
import { Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import Steps from './Steps';
import Router from 'next/router';
import { connect } from 'react-redux';
import { socialDataHandler } from '../../redux/actions/authActions';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';

const SocialInfo = ({ socialDataHandler, username, loading, usernameId }) => {
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTweeter] = useState('');
  // const [gitHub, setGitHub] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      facebook: facebook || null,
      linkedin: linkedin || null,
      twitter: twitter || null
    };

    socialDataHandler(data, username).then(res => {
      if (res === 201) {
        Router.push('/');
      }
    });
  };
  return (
    <main>
      <Steps stepNumber={2} />
      <Card>
        <Content>
          <h3>Add your social media links</h3>
          <FormStyles onSubmit={handleSubmit}>
            <InputWrapper>
              <input
                type="text"
                placeholder="Facebook"
                onChange={e => {
                  setFacebook(e.target.value);
                }}
              />
              <i className="fab fa-facebook fa-lg"></i>
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                placeholder="Linkedin"
                onChange={e => {
                  setLinkedin(e.target.value);
                }}
              />
              <i className="fab fa-linkedin fa-lg"></i>
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                placeholder="Twitter"
                onChange={e => {
                  setTweeter(e.target.value);
                }}
              />
              <i className="fab fa-twitter fa-lg"></i>
            </InputWrapper>
            {/* <InputWrapper>
          <input
            type="text"
            placeholder="Github handle"
            onChange={e => {
              setGitHub(e.target.value);
            }}
          />
          <i className="fab fa-github fa-lg"></i>
        </InputWrapper> */}

            <Button small primary type="submit" loadingB={loading}>
              Next
            </Button>
            <Skip onHandle={() => Router.push('/')}></Skip>
          </FormStyles>
        </Content>
      </Card>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    username: state.authReducer.emailData.username,
    loading: state.authReducer.loading,
    usernameId: state.authReducer.emailData.id
  };
};

export default connect(
  mapStateToProps,
  { socialDataHandler }
)(SocialInfo);

const Root = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h2 {
    text-align: center;
  }
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
    right: 20%;
    top: 30%;
    color: grey;
  }
`;
