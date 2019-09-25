/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useRouter } from 'next/router';
import { Divider } from 'antd';
import { fetchUser } from '../../redux/actions/userActions';
import {
  userProfileInfo,
  socialDataHandler,
  getJobTitles
} from '../../redux/actions/authActions';
import EditLocation from './EditLocation';
import EditMentorship from './EditMentorhip';
import EditImage from './EditImage';
import EditSocialMedia from './EditSocialMedia';
import EditnameBio from './EditNameBio';

const EditProfile = ({
  user,
  userProfileInfo,
  socialDataHandler,
  getJobTitles,
  allJobs
}) => {
  const [jobId, setJobId] = useState(null);
  const router = useRouter();
  //console.log(user);
  //console.log(jobId);
  //console.log(allJobs);

  useEffect(() => {
    fetchUser(router.query.user);
    getJobTitles();
  }, []);

  useEffect(() => {
    getCurrentJobId();
  }, [allJobs, user]);

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
        />
        <Divider dashed />
        <EditLocation user={user} jobId={jobId} />
        <Divider dashed />
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
