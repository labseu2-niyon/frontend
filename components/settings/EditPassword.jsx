import { useState } from 'react';
import { updatePassword } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import Link from 'next/link';

const EditPassword = ({ updatePassword, username, status }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmit] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const body = {
      password: oldPassword,
      newPassword: newPassword
    };

    if (!error) {
      updatePassword(username, body);
      setOldPassword('');
      setNewPassword('');
      setRepeatPassword('');
      setSubmit(true);
    }
  };

  const checkPassword = () => {
    if (newPassword !== repeatPassword) {
      setError(true);
      setSubmit(false);
    } else {
      setError(false);
    }
  };

  return (
    <form>
      <div>
        <p>Old Password:</p>
        <input
          type="password"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
          required
        ></input>
      </div>
      <div>
        <p>New Password:</p>
        <input
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <p>Confirm New Password:</p>
        <input
          type="password"
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
          onBlur={checkPassword}
        ></input>
        {error ? <p>Please make sure both passwords match</p> : null}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {submitted && status === 200 ? <p>Password updated succesfully</p> : null}
      {submitted && status === 403 ? (
        <p>
          Password could not be updated, please check your current password or{' '}
          <Link href="/reset-password">
            <a>reset it</a>
          </Link>
        </p>
      ) : null}
    </form>
  );
};

const mapStateToProps = state => {
  return {
    status: state.userReducer.passwordStatus
  };
};

export default connect(
  mapStateToProps,
  { updatePassword }
)(EditPassword);
