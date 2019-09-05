import styled from 'styled-components';

const EditPassword = () => {
  return (
    <form>
      <div>
        <p>Old Password:</p>
        <input type="password"></input>
      </div>
      <div>
        <p>New Password:</p>
        <input type="password"></input>
      </div>
      <div>
        <p>Confirm New Password:</p>
        <input type="password"></input>
      </div>
      <button>Save</button>
    </form>
  );
};

export default EditPassword;
