import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Head from 'next/head';
import { fetchUser } from '../redux/actions/userActions';
import withAuth from '../lib/withAuth';

const ChatData = ({ fetchUser, authReducer }) => {
  const userInfo = jwt.decode(authReducer.token);
  useEffect(() => {
    fetchUser(userInfo.username);
  }, []);

  return (
    <div>
      <Head>
        <title>Niyon | Chat History</title>
      </Head>
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
