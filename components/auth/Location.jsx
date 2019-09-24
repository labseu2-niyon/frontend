/* eslint-disable */
import { useState } from 'react';
import { Text, Heading2, Button } from '../~common/index';
import styled from 'styled-components';
import Steps from './StepsComp';
import Router from 'next/router';
import { connect } from 'react-redux';
import { locationData, locationRequest } from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';

const Location = ({ locationRequest, locationData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState({ state: false, data: '' });
  const [warning, setWarning] = useState('');
  const [input, setInput] = useState('');

  const getPossibleLocation = place => {
    setInput(place);
    setSelect({ ...select, state: false });
    !!place &&
      locationRequest(place)
        .then(res => {
          if (res) {
            setData(res);
          }
        })
        .catch(error => {});
  };
  const chosen = value => {
    setSelect({ state: true, data: value });
  };
  const handleSubmit = () => {
    setLoading(false);
    !select.state && setWarning('Please Select Location');
    const inwork = select.data.split(',');
    inwork.every(e => !!e) &&
      inwork.length === 2 &&
      select.state &&
      (setLoading(true),
      setWarning(''),
      locationData({
        cityName: inwork[0].trim(),
        countryName: inwork[1].trim()
      }).then(res => {
        if (res === 201) {
          setLoading(false);
          setWarning('');
          Router.push('/auth/job-title');
        }
      }));
  };

  return (
    <Root>
      <Steps stepNumber="2" />
      <Section>
        <Heading2 primary>Where are you located?</Heading2>
        <IconT className="fas fa-globe-europe" />
        {/* <Icon type="pushpin" theme="twoTone" /> */}
        <Text small>Please enter your city name.</Text>
        <Auto>
          <AutoComplete
            onChange={getPossibleLocation}
            onSelect={chosen}
            style={{ width: 200 }}
            dataSource={data}
            // autoFocus={true}
            placeholder="Your city name"
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          {!select.state ? (
            <Icon
              type="loading"
              style={{ marginLeft: '1em', fontSize: '1.5em' }}
            />
          ) : (
            <Icon
              type="check-circle"
              theme="twoTone"
              twoToneColor="#52c41a"
              style={{ marginLeft: '1em', fontSize: '1.5em' }}
            />
          )}
        </Auto>
        {warning && <Error>You need to enter a city name</Error>}
        <InputWrapper>
          <Button primary small onClick={handleSubmit} loadingB={loading}>
            Next
          </Button>
        </InputWrapper>
      </Section>
    </Root>
  );
};

export default connect(
  state => state,
  { locationData, locationRequest }
)(Location);

const Root = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    text-align: center;
    padding: 0 20px;
    @media (min-width: 500px) {
      width: 50%;
    }
  }
`;
const Section = styled.section`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const IconT = styled.i`
  font-size: 100px;
  color: green;
`;
const Auto = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
`;

const Error = styled.p`
  margin: 0;
  font-size: 14px;
  bottom: 10%;
  left: 26%;
  color: #e29273;
`;
