import styled from 'styled-components';

function Icon({ className }) {
  return <I className={className} />;
}

const I = styled.i`
  font-size: ${({ theme }) => theme.s};
  color: ${({ theme }) => theme.black};
  margin: ${({ theme }) => theme.xs};
`;

export default Icon;
