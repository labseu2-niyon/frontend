import styled from 'styled-components';
import Link from 'next/link';

function Skip({ href }) {
  return (
    <S>
      <Link href={href}>Skip</Link>
      <div className="dash" />
    </S>
  );
}

const S = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 4px;
  }

  a {
    text-decoration: none;
  }

  .dash {
    width: 30px;
    height: 2px;
    background: #4da5cf;
  }
`;

export default Skip;
