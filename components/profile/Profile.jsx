import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PhotoSection from './PhotoSection';
import Bio from './Bio';
import { fetchUser } from '../../redux/actions/userActions';

const Container = styled.main`
    width: 100%;
`;

function Profile(props) {
  return (
    <Container>
      <PhotoSection user={props} />
      <Bio user={props} />
    </Container>
  );
}

const mapStateToProps = ({ userReducer }) => ({ userReducer });

export default connect(mapStateToProps, { getUser: fetchUser })(Profile);
