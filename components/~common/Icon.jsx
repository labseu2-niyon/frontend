import styled from 'styled-components';
import { theme } from '../../lib/theme';

function Icon({
  className,
  small,
  medium,
  large,
  primary,
  secondary,
  warning,
  danger,
  black,
  grey
}) {
  let size;
  if (small) {
    size = '10px';
  } else if (medium) {
    size = '20px';
  } else if (large) {
    size = '30px';
  }

  let color;
  if (primary) {
    color = `${theme.primary}`;
  } else if (secondary) {
    color = `${theme.secondary}`;
  } else if (warning) {
    color = `${theme.warning}`;
  } else if (danger) {
    color = `${theme.danger}`;
  } else if (black) {
    color = `${theme.black}`;
  } else if (grey) {
    color = `${theme.grey}`;
  }

  return <I className={className} size={size} color={color} />;
}

const I = styled.i`
  font-size: ${({ size }) => size};
  color: ${({ color }) => `${color}`};
`;

export default Icon;
