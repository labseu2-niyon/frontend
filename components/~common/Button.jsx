import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { PacmanLoader } from 'react-spinners';

import { css } from '@emotion/core';
import { theme } from '../../lib/theme';

// 100% width inside media query will make button responsive for different mobile screen sizes.
// Change the percentage the amount of space button fills on smaller screens.

const B = styled.button`
  height: 40px;
  width: ${({ width }) => width || '150px'};
  background: ${({ themeColor }) => `${themeColor}`};
  border: none;
  color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background 400ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.smallText};

  &:hover {
    background: ${({ themeColor }) => `${darken(0.1, themeColor)}`};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth || '500px'}) {
    width: ${({ width }) => width || '100%'};
  }
`;

const BRaised = styled.button`
  height: 40px;
  width: ${({ width }) => width || '150px'};
  background: ${({ themeColor }) => `${themeColor}`};
  border: none;
  color: ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 400ms, background 400ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.smallText};

  &:hover {
    background: ${({ themeColor }) => `${darken(0.1, themeColor)}`};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const BOutline = styled.button`
  height: 40px;
  width: ${({ width }) => width || '150px'};
  background: none;
  border: ${({ themeColor }) => `1px solid ${themeColor}`};
  color: ${({ themeColor }) => `${themeColor}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border 400ms, background 400ms, color 400ms;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.smallText};

  &:hover {
    border: ${({ themeColor }) => `1px solid ${darken(0.1, themeColor)}`};
    color: ${({ themeColor }) => `${darken(0.1, themeColor)}`};
    background: #f9f9f9;
  }
`;

function Button(props) {
  const {
    children,
    outline,
    primary,
    secondary,
    warning,
    danger,
    raised,
    small,
    large,
    loading
  } = props;

  // Setting the color
  let color;
  if (primary) {
    color = `${theme.primary}`;
  } else if (secondary) {
    color = `${theme.secondary}`;
  } else if (warning) {
    color = `${theme.warning}`;
  } else if (danger) {
    color = `${theme.danger}`;
  }

  let width;
  if (small) {
    width = '150px';
  } else if (large) {
    width = '250px';
  }

  // Override the css for the react-spinners
  const override = css`
    margin: 0 auto;
    width: 30px;
  `;

  if (outline) {
    return (
      <BOutline type="button" themeColor={color} width={width}>
        {loading ? (
          <PacmanLoader
            loading={true}
            color={theme.white}
            css={override}
            sizeUnit={'px'}
            size={10}
          />
        ) : (
          children
        )}
      </BOutline>
    );
  }
  if (raised) {
    return (
      <BRaised type="button" themeColor={color} width={width}>
        {loading ? (
          <PacmanLoader
            loading={true}
            color={theme.white}
            css={override}
            sizeUnit={'px'}
            size={10}
          />
        ) : (
          children
        )}
      </BRaised>
    );
  }

  return (
    <B type="button" themeColor={color} width={width}>
      {loading ? (
        <PacmanLoader
          loading={true}
          color={theme.white}
          sizeUnit={'px'}
          css={override}
          size={10}
        />
      ) : (
        children
      )}
    </B>
  );
}

export default Button;
