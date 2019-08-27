import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { PacmanLoader } from 'react-spinners';
// import { css } from '@emotion/core';

const B = styled.button`
  height: 40px;
  width: ${({ buttonWidth }) => buttonWidth || '150px'};
  background: ${({ themeColor }) => `${themeColor}`};
  border: none;
  color: white;
  border-radius: 7px;
  transition: background 400ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ themeColor }) => `${darken(0.2, themeColor)}`};
  }
`;

const BRaised = styled.button`
  height: 40px;
  width: ${({ buttonWidth }) => buttonWidth || '150px'};
  background: ${({ themeColor }) => `${themeColor}`};
  border: none;
  color: white;
  border-radius: 7px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 400ms, background 400ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ themeColor }) => `${darken(0.2, themeColor)}`};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const BOutline = styled.button`
  height: 40px;
  width: ${({ buttonWidth }) => buttonWidth || '150px'};
  background: none;
  border: ${({ themeColor }) => `1px solid ${themeColor}`};
  color: ${({ themeColor }) => `${themeColor}`};
  border-radius: 7px;
  transition: border 400ms, background 400ms, color 400ms;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: ${({ themeColor }) => `1px solid ${darken(0.2, themeColor)}`};
    color: ${({ themeColor }) => `${darken(0.2, themeColor)}`};
    background: #f9f9f9;
  }
`;

// main colors of the application
const getColor = {
  primary: '#4DA5CF',
  secondary: '#9EAF70',
  third: '#F1CC83'
};

function Button(props) {
  const {
    children,
    customStyles,
    outline,
    primary,
    secondary,
    raised,
    small,
    large,
    loading
  } = props;
  //const color = getColor[variant || "primary"];
  //const color = primary ? "#4DA5CF" : "#9EAF70";

  //setting the color
  let color;
  if (primary) {
    color = `${getColor.primary}`;
  } else if (secondary) {
    color = `${getColor.secondary}`;
  } else {
    color = `${getColor.third}`;
  }

  let w;
  if (small) {
    w = '140px';
  } else if (large) {
    w = '300px';
  }

  // Overrode css for the Spinner
  // const override = css`
  //   margin: 0 auto;
  //   width: 30px;
  // `;

  if (outline) {
    return (
      <BOutline
        type="button"
        {...props}
        themeColor={color}
        {...customStyles}
        buttonWidth={w}
      >
        {loading ? (
          <PacmanLoader
            loading={true}
            color="#EBB64E"
            // css={override}
            sizeUnit={'px'}
            size={10}
          />
        ) : (
          children.toUpperCase()
        )}
      </BOutline>
    );
  }
  if (raised) {
    return (
      <BRaised
        type="button"
        {...props}
        themeColor={color}
        {...customStyles}
        buttonWidth={w}
      >
        {loading ? (
          <PacmanLoader
            loading={true}
            color="#EBB64E"
            css={override}
            sizeUnit={'px'}
            size={10}
          />
        ) : (
          children.toUpperCase()
        )}
      </BRaised>
    );
  }

  return (
    <B
      type="button"
      {...props}
      themeColor={color}
      {...customStyles}
      buttonWidth={w}
    >
      {loading ? (
        <PacmanLoader
          loading={true}
          color="#EBB64E"
          sizeUnit={'px'}
          css={override}
          size={10}
        />
      ) : (
        children.toUpperCase()
      )}
    </B>
  );
}

export default Button;
