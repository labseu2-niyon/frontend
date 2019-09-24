import { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { updatePassword } from '../../redux/actions/userActions';

const EditPassword = ({ updatePassword, username, status, form }) => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmit] = useState(false);
  console.log(oldPassword, newPassword, repeatPassword);

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    setLoading(true);
    const body = {
      password: oldPassword,
      newPassword
    };
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        updatePassword(username, body).then(() => {
          setLoading(false);
        });
      }
    });
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const body = {
  //     password: oldPassword,
  //     newPassword
  //   };

  //   if (!error) {
  //     updatePassword(username, body);
  //     setOldPassword('');
  //     setNewPassword('');
  //     setRepeatPassword('');
  //     setSubmit(true);
  //   }
  // };

  // const checkPassword = () => {
  //   if (newPassword !== repeatPassword) {
  //     setError(true);
  //     setSubmit(false);
  //   } else {
  //     setError(false);
  //   }
  // };

  const { getFieldDecorator } = form;

  return (
    <div>
      <Form onSubmit={handleSubmit2}>
        <Form.Item label="Old Password">
          {getFieldDecorator('old', {
            rules: [
              {
                type: 'string',
                message: 'The input is not valid'
              },
              {
                required: true,
                message: 'Please input your old password!'
              }
            ]
          })(
            <Input
              placeholder="Old password"
              onChange={e => setOldPassword(e.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                validator: validateToNextPassword
              }
            ]
          })(
            <Input.Password
              placeholder="New Password"
              onChange={e => setNewPassword(e.target.value)}
            />
          )}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!'
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(
            <Input.Password
              placeholder="Confirm Password"
              onBlur={handleConfirmBlur}
              onChange={e => setRepeatPassword(e.target.value)}
            />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Change Password
        </Button>
        {status === 200 ? <p>Password updated succesfully</p> : null}
        {status === 403 ? (
          <p>
            Password could not be updated, please check your current password or{' '}
            <Link href="/auth/reset-password">
              <a>reset it</a>
            </Link>
          </p>
        ) : null}
      </Form>
      {/* <form>
        <div>
          <p>Old Password:</p>
          <input
            type="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <p>New Password:</p>
          <input
            type="password"
            value={newPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
        </div>
        <div>
          <p>Confirm New Password:</p>
          <input
            type="password"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            onBlur={checkPassword}
          />
          {error ? <p>Please make sure both passwords match</p> : null}
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {submitted && status === 200 ? (
          <p>Password updated succesfully</p>
        ) : null}
        {submitted && status === 403 ? (
          <p>
            Password could not be updated, please check your current password or{' '}
            <Link href="/reset-password">
              <a>reset it</a>
            </Link>
          </p>
        ) : null}
      </form> */}
    </div>
  );
};

const mapStateToProps = state => ({
  status: state.userReducer.passwordStatus
});
const WrappedRegistrationForm = Form.create({ name: 'register' })(EditPassword);

export default connect(
  mapStateToProps,
  { updatePassword }
)(WrappedRegistrationForm);
