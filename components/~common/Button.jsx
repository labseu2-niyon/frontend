import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const B = styled.button`
  height: 40px;
  width: ${({ width }) => width || "150px"};
  background: ${({ themeColor }) => `${themeColor}`};
  border: none;
  color: white;
  border-radius: 4px;
  transition: background 400ms;
  cursor: pointer;

  &:hover {
    background: ${({ themeColor }) => `${darken(0.2, themeColor)}`};
  }
`;

const BRaised = styled.button`
  height: 40px;
  width: ${({ width }) => width || "150px"};
  background: ${({ themeColor }) => `${themeColor}`};
  border: none;
  color: white;
  border-radius: 4px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 400ms, background 400ms;
  cursor: pointer;

  &:hover {
    background: ${({ themeColor }) => `${darken(0.2, themeColor)}`};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const BOutline = styled.button`
  height: 40px;
  width: ${({ width }) => width || "150px"};
  background: none;
  border: ${({ themeColor }) => `1px solid ${themeColor}`};
  color: ${({ themeColor }) => `${themeColor}`};
  border-radius: 4px;
  transition: border 400ms, background 400ms, color 400ms;
  cursor: pointer;

  &:hover {
    border: ${({ themeColor }) => `1px solid ${darken(0.2, themeColor)}`};
    color: ${({ themeColor }) => `${darken(0.2, themeColor)}`};
    background: #f9f9f9;
  }
`;

const getColor = {
  primary: "#33b1f5",
  secondary: "#eb4034"
};

function Button(props) {
  const { children, customStyles, outline, variant, raised } = props;
  const color = getColor[variant || "primary"];

  if (raised) {
    return (
      <BRaised type="button" {...props} themeColor={color} {...customStyles}>
        {children.toUpperCase()}
      </BRaised>
    );
  }

  if (outline) {
    return (
      <BOutline type="button" {...props} themeColor={color} {...customStyles}>
        {children.toUpperCase()}
      </BOutline>
    );
  }

  return (
    <B type="button" {...props} themeColor={color} {...customStyles}>
      {children.toUpperCase()}
    </B>
  );
}

export default Button;
