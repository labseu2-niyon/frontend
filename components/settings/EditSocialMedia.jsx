/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Form, Input, message, Button } from 'antd';
import { Text } from '../~common/index';
import { theme } from '../../lib/theme';

const EditSocialMedia = ({ user, form, socialDataHandlerSettings }) => {
  const [twitter, setTwitter] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [github, setGithub] = useState(null);

  useEffect(() => {
    if (user) {
      form.getFieldDecorator('twitter', {
        initialValue: user.social_media.facebook
      });
      form.getFieldDecorator('linkedin', {
        initialValue: user.social_media.linkedin
      });
      form.getFieldDecorator('facebook', {
        initialValue: user.social_media.facebook
      });
      form.getFieldDecorator('github', {
        initialValue: user.social_media.github
      });
    }
  }, []);

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
          twitter: values.twitter,
          linkedin: values.linkedin,
          facebook: values.facebook,
          github: values.github
        };

        //not working yet ***************************//
        //need some more work on backend -
        // Problem: everytime that a user change just one of the handler needs to change them all for the endpoint to work
        socialDataHandlerSettings(data, user.username).then(res => {
          if (res === 201) {
            form.setFieldsValue({ facebook: values.facebook });
            form.setFieldsValue({ twitter: values.twitter });
            form.setFieldsValue({ linkedin: values.linkedin });
            form.setFieldsValue({ github: values.github });
            success();
          } else {
            error();
          }
        });
      }
    });
  };

  if (user) {
    return (
      <SocialSection>
        <Text big bold>
          Update Your Social Media Links
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
                placeholder={user.social_media.twitter}
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
                placeholder={user.social_media.linkedin}
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
                placeholder={user.social_media.facebook}
                onChange={e => setFacebook(e.target.value)}
              />
            )}
          </Form.Item>
          <Form.Item label="GitHub">
            {getFieldDecorator('github', {
              rules: [
                {
                  required: false,
                  message: 'Please input your GitHub handler!'
                }
              ]
            })(
              <Input
                // value={github}
                placeholder={user.social_media.github}
                onChange={e => setGithub(e.target.value)}
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
            Update
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
