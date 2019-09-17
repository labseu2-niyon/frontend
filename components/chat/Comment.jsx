import { Comment, Tooltip, Avatar } from 'antd';
const moment = require('moment');

const CommentComp = ({ username, message, date, image }) => {
  return (
    <Comment
      author={<a>{username}</a>}
      avatar={<Avatar src={image} alt={username} />}
      content={<p>{message}</p>}
      datetime={
        <Tooltip title="">
          <p>{moment(date).fromNow()}</p>
        </Tooltip>
      }
    />
  );
};

export default CommentComp;
