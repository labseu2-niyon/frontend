/* eslint-disable */
import { useState } from 'react';
import { Text, Heading2, Button } from '../~common/index';
import styled from 'styled-components';
import Steps from './StepsComp';
import Router from 'next/router';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { locationData, locationRequest } from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';

const Location = ({ locationRequest, locationData }) => {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState({ state: false, data: '' });
  function getPossibleLocation(place) {
    locationRequest(place)
      .then(res => {
        if (res) {
          setData(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  function chosen(value) {
    setSelect({ state: true, data: value });
  }
  function handleSubmit() {
    const inwork = select.data.split(',');
    select.state && locationData({
      cityName: inwork[0].trim(),
      countryName: inwork[1].trim()
    }).then(res => {
      if (res === 201) {
        Router.push('/auth/job-title');
      }
    });
  }

  return (
    <Root>
      <Steps stepNumber="2" />
      <Section>
        <Heading2 primary>Location Info</Heading2>
        <IconT className="fas fa-globe-europe" />
        {/* <Icon type="pushpin" theme="twoTone" /> */}
        <Text small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
          nisl, aliquam nec erat et, efficitur mollis metus.
        </Text>
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
        <Button primary small onClick={handleSubmit}>
          Next
        </Button>
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

  p {
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
  height: 80vh;
`;

const IconT = styled.i`
  font-size: 100px;
  color: green;
`;
const Auto = styled.div`
  display: flex;
  align-items: center;
`;
