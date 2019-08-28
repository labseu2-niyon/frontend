import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <Link href="/dashboard">
        <a>Home</a>
      </Link>
      <Link href="/[username]">
        <a>Profile</a>
      </Link>
      <Link href="/">
        <a>My Connections</a>
      </Link>
      <Link href="/explore">
        <a>Explore</a>
      </Link>
      <Link href="/settings">
        <a>Settings</a>
      </Link>
    </nav>
  );
};

export default Navigation;
