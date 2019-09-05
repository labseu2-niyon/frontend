import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { fetchAllUsers, fetchAllConnections } from '../../redux/actions/userActions';

const withUserData = (Component) => {
  function WithUserData(props) {
    const [users, setUsers] = useState([]);

    const mapUsers = (input) => {
      console.log(input);
      const withDisplay = input.map((user) => ({ ...user, display: true }));
      setUsers(withDisplay);
    };

    useEffect(() => {
      const u = jwt.decode(props.authReducer.token);
      (async () => {
        if (props.userReducer.usersAll) {
          await props.fetchUsers(u.username);
        }
        mapUsers(props.userReducer.usersAll);
      })();

      if (!props.userReducer.connectionsAll) {
        props.fetchConnections(u.username);
      }
    }, []);

    return <Component {...props.userReducer} users={users} setUsers={setUsers} />;
  }

  const mapStateToProps = (state) => state;

  const mapDispatchToProps = {
    fetchUsers: fetchAllUsers,
    fetchConnections: fetchAllConnections,
  };

  WithUserData.propTypes = {
    authReducer: PropTypes.shape().isRequired,
    userReducer: PropTypes.shape().isRequired,
    usersAll: PropTypes.arrayOf().isRequired,
    connectionsAll: PropTypes.arrayOf().isRequired,
    fetchUsers: PropTypes.func.isRequired,
    fetchConnections: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserData);
};

export default withUserData;
