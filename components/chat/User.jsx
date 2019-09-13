import Avatar from '../~common/Avatar';
import Link from 'next/link';

const User = ({ user }) => {
  return (
    <div>
      <Link href={`/chat/${user.username}`}>
        <div>
          <Avatar large source={user.profile_picture} />
          <p>
            {user.first_name} {user.last_name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default User;
