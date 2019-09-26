/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useRouter } from 'next/router';
import { Divider } from 'antd';
import Head from 'next/head';
import { fetchUser } from '../../redux/actions/userActions';
import {
  userProfileInfo,
  socialDataHandlerSettings,
  getJobTitles
} from '../../redux/actions/authActions';
import EditLocation from './EditLocation';
import EditImage from './EditImage';
import EditSocialMedia from './EditSocialMedia';
import EditnameBio from './EditNameBio';

const EditProfile = ({
  user,
  userProfileInfo,
  socialDataHandlerSettings,
  getJobTitles,
  allJobs
}) => {
  const [jobId, setJobId] = useState(null);
  const router = useRouter();
  console.log(user);

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
        <Head>
          <title>Niyon | Settings</title>
        </Head>
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
        <EditSocialMedia
          socialDataHandlerSettings={socialDataHandlerSettings}
          user={user}
        />
      </>
    );
  }
  return <></>;
};

const mapDispatchToProps = {
  fetchUser,
  userProfileInfo,
  socialDataHandlerSettings,
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
