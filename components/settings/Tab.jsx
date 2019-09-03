import Link from 'next/link';

const Tab = ({ name, route }) => {
  return (
    <Box>
      <Link href={route}>
        <a>{name}</a>
      </Link>
    </Box>
  );
};

export default Tab;
