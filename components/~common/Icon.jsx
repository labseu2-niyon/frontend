import styled from 'styled-components';

function Icon({ className, small, medium, large }) {
  let size;
  if (small) {
    size = '10px';
  } else if (medium) {
    size = '20px';
  } else if (large) {
    size = '30px';
  }

  return <I className={className} size={size} />;
}

const I = styled.i`
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.black};
`;

export default Icon;
