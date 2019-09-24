/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import {
  userProfileInfo,
  socialDataHandler
} from '../../redux/actions/authActions';
import { withRouter, useRouter } from 'next/router';
import EditLocation from './EditLocation';
import EditMentorship from './EditMentorhip';
import EditImage from './EditImage';
import EditSocialMedia from './EditSocialMedia';
import EditnameBio from './EditNameBio';

import { Divider } from 'antd';

const EditProfile = ({ user, userProfileInfo, socialDataHandler }) => {
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    fetchUser(router.query.user);
  }, []);

  if (user) {
    return (
      <>
        <EditImage user={user} />
        <Divider dashed />
        <EditnameBio userProfileInfo={userProfileInfo} user={user} />
        <Divider dashed />
        <EditLocation user={user} />
        <Divider dashed />
        <EditMentorship user={user} />
        <Divider dashed />
        <EditSocialMedia socialDataHandler={socialDataHandler} user={user} />
      </>
    );
  }
  return <></>;
};

const mapDispatchToProps = {
  fetchUser,
  userProfileInfo,
  socialDataHandler
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProfile));
