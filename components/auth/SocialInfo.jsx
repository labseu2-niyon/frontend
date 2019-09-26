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
import Link from 'next/link';

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
          <h4>Add your social media links</h4>
          <FormStyles onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Facebook"
                onChange={e => {
                  setFacebook(e.target.value);
                }}
              />
              <i className="fab fa-facebook fa-lg"></i>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Linkedin"
                onChange={e => {
                  setLinkedin(e.target.value);
                }}
              />
              <i className="fab fa-linkedin fa-lg"></i>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Twitter"
                onChange={e => {
                  setTweeter(e.target.value);
                }}
              />
              <i className="fab fa-twitter fa-lg"></i>
            </div>
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

            <button type="submit">Next</button>
          </FormStyles>
        </Content>
      </Card>
      <BottomWrapper>
        <p>
          <Link href="/">
            <a>Skip</a>
          </Link>
        </p>
      </BottomWrapper>
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

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #348fbb;
  }
`;
