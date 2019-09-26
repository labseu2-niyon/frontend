/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useRouter } from 'next/router';
import { Divider } from 'antd';
import Head from 'next/head';
import { fetchUser } from '../../redux/actions/userActions';
import {
  userProfileInfo,
  socialDataHandler,
  getJobTitles
} from '../../redux/actions/authActions';
import EditLocation from './EditLocation';
//import EditMentorship from './EditMentorhip';
import EditImage from './EditImage';
import EditSocialMedia from './EditSocialMedia';
import EditnameBio from './EditNameBio';

const dummyUser = {
  image: 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg',
  name: 'Guillermo Rauch'
};

const EditProfile = ({ user }) => {
  return (
    <div>
      <Head>
        <title>
          Niyon {user.username} EditProfile
        </title>
      </Head>
      <Image>
        <Avatar large source={dummyUser.image} />
        <p>Edit Profile Image</p>
      </Image>
      </div>
        <div>
          <p>First Name</p>
          <input type="text" name="firstName" value={user.first_name}></input>
        </div>
        <div>
          <p>Last Name</p>
          <input type="text" name="lastName" value={user.last_name}></input>
        </div>
        <div>
          <p>Username</p>
          <input type="text" name="username" value={user.username}></input>
        </div>
        <div>
          <p>Bio</p>
          <textarea
            name="message"
            rows="10"
            cols="30"
            value={user.biography}
          ></textarea>
        </div>
        <div>
          <p>Email</p>
          <input type="text" name="email" value={user.email}></input>
        </div>

        <h3>Location</h3>
        <div>
          <p>Location</p>
          <input type="text"></input>
        </div>

        <h3>Mentorship</h3>
        <div>
          <p>Job Title</p>
          <select name="jobTitle"></select>
        </div>
        <div>
          <p>Mentor or Mentee Option</p>
          <select name="jobTitle"></select>
        </div>

  useEffect(() => {
    fetchUser(router.query.user);
    getJobTitles();
    getCurrentJobId();
  }, []);

  const getCurrentJobId = () => {
    const id =
      user &&
      allJobs.filter(job => {
        return job.tech_name === user.job.tech_name;
      });
    setJobId(id);
  };

  if (user) {
    return (
      <>
        <EditImage user={user} />
        <Divider dashed />
        <EditnameBio
          userProfileInfo={userProfileInfo}
          user={user}
          jobId={jobId}
          allJobs={allJobs}
        />
        <Divider dashed />
        <EditLocation user={user} jobId={jobId} />
        {/* <EditMentorship user={user} /> */}
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
  socialDataHandler,
  getJobTitles
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    allJobs: state.authReducer.allJobs
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProfile));
