import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopSection from './TopSection';
import ProfileList from './ProfileList';
import { fetchAllUsers, fetchAllConnections } from '../../redux/actions/userActions';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function Home(props) {
  useEffect(() => {
    if (!props.usersAll) {
      props.fetchUsers();
    }

    if (!props.connectionsAll) {
      props.fetchConnections();
    }
  }, []);

  return (
    <Wrapper>
      <TopSection numOfConnections={props.connectionsAll.length} />
      <ProfileList title="UserSuggestions" users={props.usersAll || []} />
      <div style={{
        width: '100%', height: 1, background: '#eaeaea', border: 'none',
      }}
      />
      <ProfileList title="My Connections" users={props.connectionsAll || []} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => state.userReducer;

Home.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchConnections: PropTypes.func.isRequired,
  usersAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, { fetchUsers: fetchAllUsers, fetchConnections: fetchAllConnections })(Home);
