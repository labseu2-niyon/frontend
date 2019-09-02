import Router from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../~common/index';
import { logOutUser } from '../../redux/actions/authActions';

const Logout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    logOutUser();
    Router.push('/');
  };
  return <Button onSubmit={handleSubmit}>Log Out</Button>;
};

export default connect(
  (state) => state,
  { logOutUser },
)(Logout);
