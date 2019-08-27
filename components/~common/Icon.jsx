import styled from 'styled-components';

function Icon({ className }) {
  return <I className={className} />;
}

const I = styled.i`
  font-size: ${({ theme }) => theme.smallText};
  color: ${({ theme }) => theme.black};
  margin: 0 5px;
`;

export default Icon;
