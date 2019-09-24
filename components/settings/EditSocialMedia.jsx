/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../~common/index';
import { Form, Input, message, Button } from 'antd';
import { theme } from '../../lib/theme';

const EditSocialMedia = ({ user, form, socialDataHandler }) => {
  const [google, setGoogle] = useState('');
  const [github, setGithub] = useState('');
  const [facebook, setFacebook] = useState('');

  const success = () => {
    message.success('Your Profile was update succesfully');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const { getFieldDecorator } = form;

  const handleSocialMedia = e => {
    e.preventDefault();
    const data = {
      twitter: google, //old version in database
      linkedin: github, //old version in database
      facebook
    };
    socialDataHandler(data, user.username);
  };

  if (user) {
    return (
      <SocialSection>
        <Text big bold>
          Update Your Social Media Handlers
        </Text>
        <Form onSubmit={handleSocialMedia}>
          <Form.Item label="Google">
            {getFieldDecorator('google', {
              rules: [
                {
                  required: false,
                  message: 'Please input your Google handler!'
                }
              ]
            })(
              <Input
                value={google}
                placeholder="Google handler"
                onChange={e => setGoogle(e.target.value)}
              />
            )}
          </Form.Item>
          <Form.Item label="Github">
            {getFieldDecorator('github', {
              rules: [
                {
                  required: false,
                  message: 'Please input your Github handler!'
                }
              ]
            })(
              <Input
                value={google}
                placeholder="GitHub handler"
                onChange={e => setGithub(e.target.value)}
              />
            )}
          </Form.Item>
          <Form.Item label="Facebook">
            {getFieldDecorator('facebook', {
              rules: [
                {
                  required: false,
                  message: 'Please input your Facebook handler!'
                }
              ]
            })(
              <Input
                value={google}
                placeholder="Facebook handler"
                onChange={e => setFacebook(e.target.value)}
              />
            )}
          </Form.Item>
          <Button
            type="primary"
            size="large"
            loading={false}
            htmlType="submit"
            style={{ backgroundColor: theme.primary }}
          >
            Update Social Media Handlers
          </Button>
        </Form>
      </SocialSection>
    );
  }
  return <></>;
};

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  EditSocialMedia
);

export default WrappedRegistrationForm;

const SocialSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 80%;
  }
  button {
    width: 100%;
  }

  p {
    margin-top: 30px;
    text-align: center;
  }
`;
