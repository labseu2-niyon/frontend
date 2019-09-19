const moment = require('moment');
import styled from 'styled-components';
import Avatar from '../~common/Avatar';

const CommentComp = ({ name, message, date, image, currentUser }) => {
  return (
    <Comment>
      <UserData>
        <PhotoWrapper>
          <Photo>
            <ImgProfile
              src={image || '../../static/profile-placeholder.svg'}
              alt="User Profile Picture"
            />
          </Photo>
        </PhotoWrapper>
        <p className="name">{name}</p>
        <p className="time">{moment(date).fromNow()}</p>
      </UserData>

      <Bubble currentUser={currentUser}>
        <div>{message}</div>
      </Bubble>
    </Comment>
  );
};

const Comment = styled.div`
  width: 100%;

  .data {
    margin-bottom: 15px;
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
    margin-right: 10px;
  }

  .name {
    font-weight: 500;
  }

  .time {
    color: #c2c2c2;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;

const Photo = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eaeaea;
  overflow: hidden;
`;

const ImgProfile = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Bubble = styled.div`
  max-width: 60%;
  display: flex;
  div {
    box-sizing: border-box;
    color: ${props => (props.currentUser ? '#222222' : 'white')};
    padding: 10px;
    line-height: 20px;
    background-color: ${props => (props.currentUser ? '#f1f0f0' : '#348fbb')};
    border-radius: 7px;
    margin: 10px 0 30px 0;
    position: relative;
    align-self: flex-start;
  }

  /* &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 3%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #348fbb;
    border-top: 0;
    margin-left: -10px;
    margin-top: -10px;
  } */
`;

export default CommentComp;
