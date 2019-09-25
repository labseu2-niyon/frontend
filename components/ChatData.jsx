import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../redux/actions/userActions';
import withAuth from '../lib/withAuth';

const ChatData = ({ fetchUser, authReducer }) => {
  const userInfo = jwt.decode(authReducer.token);
  useEffect(() => {
    fetchUser(userInfo.username);
  }, []);

  return (
    <div>
      <title>
        Niyon {userInfo.username} chats History
      </title>
    </div>
  );
};

const mapStateToProps = state => ({
  authReducer: state.authReducer,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(withAuth(ChatData));
