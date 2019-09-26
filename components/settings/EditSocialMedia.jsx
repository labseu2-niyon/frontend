/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../~common/index';
import { Form, Input, message, Button } from 'antd';
import { theme } from '../../lib/theme';

const EditSocialMedia = ({ user, form, socialDataHandler }) => {
  const [twitter, setTwitter] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [facebook, setFacebook] = useState(null);

  const success = () => {
    message.success('Your Profile was update succesfully');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const { getFieldDecorator } = form;

  const handleSocialMedia = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          twitter,
          linkedin,
          facebook
        };

        //not working yet ***************************//
        //need some more work on backend -
        // Problem: everytime that a user change just one of the handler needs to change them all for the endpoint to work
        socialDataHandler(data, user.username);

        form.setFieldsValue({ facebook: null });
        form.setFieldsValue({ twitter: null });
        form.setFieldsValue({ linkedin: null });
        success();
      }
    });
  };

  if (user) {
    return (
      <SocialSection>
        <Text big bold>
          Update Your Social Media Handlers
        </Text>
        <Form onSubmit={handleSocialMedia}>
          <Form.Item label="Twitter">
            {getFieldDecorator('twitter', {
              rules: [
                {
                  required: false,
                  message: 'Please input your Twitter handler!'
                }
              ]
            })(
              <Input
                // value={google}
                placeholder="Twitter handler"
                onChange={e => setTwitter(e.target.value)}
              />
            )}
          </Form.Item>
          <Form.Item label="Linkedin">
            {getFieldDecorator('linkedin', {
              rules: [
                {
                  required: false,
                  message: 'Please input your Linkedin handler!'
                }
              ]
            })(
              <Input
                // value={google}
                placeholder="Linkedin handler"
                onChange={e => setLinkedin(e.target.value)}
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
                // value={google}
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
