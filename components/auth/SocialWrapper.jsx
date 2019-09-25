import styled from 'styled-components';
import { lighten } from 'polished';

const SocialWrapper = ({ baseUrl, type }) => {
  return (
    <div>
      <Or>
        <span>or {type} with</span>
      </Or>
      <Wrapper>
        <a href={`${baseUrl}/auth/facebook`}>
          <Icon>
            <i className="fab fa-facebook-f"></i>
          </Icon>
        </a>

        <a href={`${baseUrl}/auth/github`}>
          <Icon>
            <i className="fab fa-github"></i>
          </Icon>
        </a>

        <a href={`${baseUrl}/auth/google`}>
          <Icon>
            <i className="fab fa-google"></i>
          </Icon>
        </a>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ededed;

  i {
    font-size: 20px;
    color: #222222;
  }

  &:hover {
    background: #ededed;
  }
  transition: background 1s ease;
`;

const Or = styled.div`
  width: 100%;
  align-self: center;
  background-image: linear-gradient(to bottom, #ededed 0%, #ededed 100%);
  background-repeat: repeat-x;
  background-size: 1px 2px;
  background-position: 0 center;
  text-align: center;
  margin: 6px 0 18px 0;

  span {
    display: inline-block;
    color: #222;
    padding: 0 10px;
    background-color: #fff;
    font-size: 13px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default SocialWrapper;
