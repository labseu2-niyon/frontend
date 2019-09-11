import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import {
  fetchAllUsers,
  fetchAllConnections,
  fetchUser
} from '../../redux/actions/userActions';

import {
  getJobTitles
} from '../../redux/actions/authActions';

const withUserData = Component => {
  function WithUserData(props) {
    const [users, setUsers] = useState([]);
    const [jobs, setJobs] = useState([]);

    const mapUsers = input => {
      const withDisplay = input.map(user => ({ ...user, display: true, filtered: true }));
      setUsers(withDisplay);
    };

    const mapJobs = input => {
      const jobTitles = input.map(job => job.tech_name);
      setJobs(jobTitles);
    };

    useEffect(() => {
      if (props.userReducer && props.authReducer) {
        const u = jwt.decode(props.authReducer.token);

        if (!props.userReducer.usersAll.length) {
          props.fetchUsers(u.username);
        }

        if (!props.userReducer.connectionsAll.length) {
          props.fetchConnections(u.username);
        }

        if (!props.userReducer.user) {
          props.fetchOneUser(u.username);
        }

        if (!props.authReducer.allJobs.length) {
          props.getJobs();
        }
      }
    }, []);

    useEffect(() => {
      mapUsers(props.userReducer.usersAll);
    }, [props.userReducer.usersAll]);

    useEffect(() => {
      mapJobs(props.authReducer.allJobs);
    }, [props.authReducer.allJobs]);

    if (!users.length || !jobs.length) {
      return null;
    }

    return (
      <Component
        {...props.userReducer}
        jobs={jobs}
        users={users}
        connectionsAll={users}
        setUsers={setUsers}
      />
    );
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = {
    fetchUsers: fetchAllUsers,
    fetchConnections: fetchAllConnections,
    fetchOneUser: fetchUser,
    getJobs: getJobTitles
  };

  WithUserData.propTypes = {
    authReducer: PropTypes.shape().isRequired,
    userReducer: PropTypes.shape().isRequired,
    usersAll: PropTypes.arrayOf().isRequired,
    connectionsAll: PropTypes.arrayOf().isRequired,
    fetchOneUser: PropTypes.func.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    fetchConnections: PropTypes.func.isRequired,
    getJobs: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithUserData);
};

export default withUserData;
