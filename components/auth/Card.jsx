import styled from 'styled-components';

const Card = ({ children }) => {
  return (
    <Wrapper>
      <AuthCard>{children}</AuthCard>
    </Wrapper>
  );
};

// The wrapper centers the card in the middle of the page
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const AuthCard = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    margin: 0 30px;
  }

  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export default Card;
