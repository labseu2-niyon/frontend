import styled from 'styled-components';
import { useState } from 'react';

const EditPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const body = {
      password: oldPassword,
      newPassword: newPassword
    };

    if (!error) {
      updatePassword(body);
      setOldPassword('');
      setNewPassword('');
      setRepeatPassword('');
    }
  };

  const checkPassword = () => {
    if (newPassword !== repeatPassword) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Old Password:</p>
        <input
          type="password"
          onChange={e => setOldPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <p>New Password:</p>
        <input
          type="password"
          onChange={e => setNewPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <p>Confirm New Password:</p>
        <input
          type="password"
          onChange={e => setRepeatPassword(e.target.value)}
          onBlur={checkPassword}
        ></input>
        {error ? <p>Please make sure both passwords match</p> : null}
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EditPassword;
