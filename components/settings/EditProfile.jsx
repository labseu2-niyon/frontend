/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/userActions';
import { withRouter, useRouter } from 'next/router';
import Avatar from '../~common/Avatar';
import EditLocation from './EditLocation';
import EditMentorship from './EditMentorhip';

// const dummyUser = {
//   image: 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg',
//   name: 'Guillermo Rauch'
// };

const EditProfile = ({ user, username }) => {
  const router = useRouter();

  const usern = router.query;
  console.log(user);
  fetchUser(username);

  const handleSave = () => {};

  if (user) {
    return (
      <div>
        <Image>
          <Avatar large source={user.profile_picture} />
          <p>Edit Profile Image</p>
        </Image>
        <div>
          <div>
            <p>First Name</p>
            <input type="text" name="firstName" value={user.first_name} />
          </div>
          <div>
            <p>Last Name</p>
            <input type="text" name="lastName" value={user.last_name} />
          </div>
          <div>
            <p>Username</p>
            <input type="text" name="username" value={user.username} />
          </div>
          <div>
            <p>Bio</p>
            <textarea
              name="message"
              rows="10"
              cols="30"
              value={user.biography}
            />
          </div>
          <div>
            <p>Email</p>
            <input type="text" name="email" value={user.email} />
          </div>
          <h3>Enter new Location</h3>
          <div>
            <EditLocation user={user} />
          </div>

          <div>
            <EditMentorship />
          </div>
          <div>
            <p>Mentor or Mentee Option</p>
            <select name="jobTitle" />
          </div>

          <h3>Social</h3>

          <div>
            <p>Github</p>
            <input type="text" />
          </div>
          <div>
            <p>Twitter</p>
            <input type="text" />
          </div>
          <div>
            <p>Linkedin</p>
            <input type="text" />
          </div>

          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    );
  }
  return <div></div>;
};

const mapDispatchToProps = {
  fetchUser
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
