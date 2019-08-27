import styled from 'styled-components';
import { Text, Button } from './~common/index';

const SignUp = () => {
  return (
    <div>
      <Text small>Lorem Ipsum, welcome message, blah blah blah.`</Text>
      <div>
        <Button large>Google</Button>
        <Button large>Github</Button>
        <Button large>Twitter</Button>
        <Button large>Facebook</Button>
        <Button large>Email</Button>
      </div>
      <Text small>Already a member? Login IN`</Text>
    </div>
  );
};

export default SignUp;
