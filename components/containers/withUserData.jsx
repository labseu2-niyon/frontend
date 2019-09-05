import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllUsers, fetchAllConnections } from '../../redux/actions/userActions';


const withUserData = (Component) => {
  function WithUserData(props) {
    const [users, setUsers] = useState([]);

    const mapUsers = (input) => {
      const withDisplay = input.map((user) => ({ ...user, display: true }));
      setUsers(withDisplay);
    };

    useEffect(() => {
      (async () => {
        if (!props.usersAll) {
          await props.fetchUsers();
        }
        mapUsers(props.usersAll);
      })();

      if (!props.connectionsAll) {
        props.fetchConnections();
      }
    }, []);

    return <Component {...props} users={users} setUsers={setUsers} />;
  }

  const mapStateToProps = (state) => state.userReducer;

  const mapDispatchToProps = {
    fetchUsers: fetchAllUsers,
    fetchConnections: fetchAllConnections,
  };

  WithUserData.propTypes = {
    usersAll: PropTypes.arrayOf().isRequired,
    connectionsAll: PropTypes.arrayOf().isRequired,
    fetchUsers: PropTypes.func.isRequired,
    fetchConnections: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithUserData);
};

export default withUserData;
