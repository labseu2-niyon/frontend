/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
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

import { Form } from 'antd';

const EditProfile = ({ user, userProfileInfo, socialDataHandler }) => {
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    fetchUser(router.query.user);
  }, []);

  if (user) {
    return (
      <div>
        <Image>
          <EditImage user={user} />
        </Image>
        <EditnameBio userProfileInfo={userProfileInfo} user={user} />

        <EditLocation user={user} />

        <EditMentorship user={user} />

        <EditSocialMedia socialDataHandler={socialDataHandler} user={user} />
      </div>
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

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  p {
    margin-left: 1rem;
  }
`;
