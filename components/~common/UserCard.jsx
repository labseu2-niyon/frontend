import React from 'react';
import styled from 'styled-components';

const C = styled.div`
  box-sizing: border-box;
  max-width: ${({ width }) => width || '400px'};
  max-height: ${({ height }) => height || '150px'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 0 10px;
`;

//mobile view Image
const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  padding: 10px;
  padding-bottom: 0;
  margin: 0;
`;

//desktop view Image
const ImageDesktop = styled.img`
  border-radius: 50%;
  width: 120px;
  padding: 10px;
  padding-bottom: 0;
  margin: 0;
`;

//card display for mobile
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//card display for desktop
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

//information about: image, name , job type
const First = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

//information on desktopView
const FirstMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//info about name, job type
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
  h3 {
    margin: 0;
  }
  p {
    margin: 7px 0;
    font-style: italic;
  }
`;

//information about location and add user icon on mobile
const Second = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  p {
    margin: 0;
  }
`;

//information about location and add user icon on desktop
const SecondDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;

function Card(props) {
  const {
    children,
    customStyles,
    src,
    title,
    type,
    town,
    country,
    mobile,
    desktop,
    addUserHandler
  } = props;

  if (mobile) {
    return (
      <C {...props} {...customStyles}>
        <Column>
          <First>
            <Image src={src} />
            <Info>
              <h3>{title}</h3>
              <p>{type}</p>
            </Info>
          </First>
          <Second>
            <Location>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <p>{town}</p>, <span>&nbsp;</span>
              <p>{country}</p>
            </Location>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              onClick={addUserHandler}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </Second>
        </Column>
      </C>
    );
  }

  if (desktop) {
    return (
      <C {...props} {...customStyles}>
        <Flex>
          <ImageDesktop src={src} />
          <div style={{ paddingRight: '40px' }}>
            <FirstMobile>
              <Info>
                <h3>{title}</h3>
                <p>{type}</p>
              </Info>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                onClick={addUserHandler}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </FirstMobile>
            <SecondDesktop>
              <Location>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <p>{town}</p>, <span>&nbsp;</span>
                <p>{country}</p>
              </Location>
            </SecondDesktop>
          </div>
        </Flex>
      </C>
    );
  }

  return (
    <C {...props} {...customStyles}>
      {children}
    </C>
  );
}

export default Card;
