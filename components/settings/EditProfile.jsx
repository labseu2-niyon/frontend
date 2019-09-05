import Avatar from '../~common/Avatar';
import styled from 'styled-components';

const dummyUser = {
  image: 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg',
  name: 'Guillermo Rauch'
};

const EditProfile = ({ user }) => {
  return (
    <div>
      <Image>
        <Avatar large source={dummyUser.image} />
        <p>Edit Profile Image</p>
      </Image>
      <div>
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

        <h3>Social</h3>

        <div>
          <p>Github</p>
          <input type="text"></input>
        </div>
        <div>
          <p>Twitter</p>
          <input type="text"></input>
        </div>
        <div>
          <p>Linkedin</p>
          <input type="text"></input>
        </div>

        <button>Save</button>
      </div>
    </div>
  );
};

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

export default EditProfile;
