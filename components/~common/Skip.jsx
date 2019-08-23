import styled from 'styled-components';

function Skip() {
  return (
    <S>
      <p>Skip</p>
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

  .dash {
    width: 30px;
    height: 2px;
    background: #4da5cf;
  }
`;

export default Skip;
