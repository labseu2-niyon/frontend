/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Input, message, Button } from 'antd';
import { theme } from '../../lib/theme';

const EditNameBio = ({ user, form, userProfileInfo }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [bio, setBio] = useState('');

  const { TextArea } = Input;
  useEffect(() => {
    if (user) {
      form.getFieldDecorator('First Name', { initialValue: user.first_name });
      setFirstName(user.first_name);
      form.getFieldDecorator('Last Name', { initialValue: user.last_name });
      setLastname(user.last_name);
      form.getFieldDecorator('Bio', { initialValue: user.biography });
      setBio(user.biography);
    }
  }, [user]);

  const success = () => {
    message.success('Your Profile was update succesfully');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const handleSave = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const data = {
          firstName,
          lastName,
          bio,
          locationId: user.location.locationId,
          jobId: '5' //not sure how to take job id from the user yet
        };

        userProfileInfo(data, user.username).then(res => {
          res === 200 ? success() : error();
        });
      }
    });
  };

  const { getFieldDecorator } = form;

  if (user) {
    return (
      <FirstSection>
        <Form onSubmit={handleSave}>
          <Form.Item label="First Name">
            {getFieldDecorator('First Name', {
              rules: [
                {
                  pattern: /^[a-zA-Z]*$/,
                  message: 'Must contain only letters'
                },
                {
                  required: true,
                  message: 'Please input your First Name!'
                }
              ]
            })(
              <Input
                value={user.first_name}
                placeholder={user.first_name}
                onChange={e => setFirstName(e.target.value)}
              />
            )}
          </Form.Item>
          <Form.Item label="Last Name">
            {getFieldDecorator('Last Name', {
              rules: [
                {
                  pattern: /^[a-zA-Z]*$/,
                  message: 'Must contain only letters'
                },
                {
                  required: true,
                  message: 'Please input your Last Name!'
                }
              ]
            })(
              <Input
                value={user.first_name}
                placeholder={user.last_name}
                onChange={e => setLastname(e.target.value)}
              />
            )}
          </Form.Item>
          <Form.Item label="Biography">
            {getFieldDecorator('Bio', {
              rules: [
                {
                  type: 'string',
                  message: 'The input is not valid!'
                },
                {
                  required: false,
                  message: 'Please input your Last Name!'
                }
              ]
            })(
              <TextArea
                rows={10}
                value={user.bio}
                placeholder={user.bio}
                onChange={e => setBio(e.target.value)}
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
            Update Information
          </Button>
        </Form>
      </FirstSection>
    );
  }
  return <></>;
};

const WrappedRegistrationForm = Form.create({ name: 'register' })(EditNameBio);

export default WrappedRegistrationForm;

const FirstSection = styled.section`
  display: flex;

  justify-content: center;
  form {
    width: 80%;
  }

  button {
    width: 100%;
  }
`;