/* eslint-disable */
import { useState } from 'react';
import { Text, Heading2, Button } from '../~common/index';
import styled from 'styled-components';
import Steps from './Steps';
import Router from 'next/router';
import { connect } from 'react-redux';
import { locationData, locationRequest } from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';

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
    <main>
      <Steps stepNumber={1} />
      <Card>
        <Content>
          <h3>Where are you located?</h3>

          <p>Please enter your city name:</p>
          <FormStyles>
            <Auto>
              <AutoComplete
                onChange={getPossibleLocation}
                onSelect={chosen}
                style={{ width: '100%', marginRight: '5px' }}
                dataSource={data}
                placeholder="City Name"
                filterOption={(inputValue, option) =>
                  option.props.children
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <div className="icons">
                {!select.state ? (
                  <img
                    src="../../static/earth.png"
                    alt="Earth Icon"
                    width="30px"
                  />
                ) : (
                  <Icon
                    type="check-circle"
                    theme="twoTone"
                    twoToneColor="#52c41a"
                    style={{ fontSize: '25px' }}
                  />
                )}
              </div>
            </Auto>
            {warning && (
              <p className="error with-margin">You need to enter a city name</p>
            )}
            <button onClick={handleSubmit}>Next</button>
          </FormStyles>
        </Content>
      </Card>
    </main>
  );
};

export default connect(
  state => state,
  { locationData, locationRequest }
)(Location);

const Auto = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .icons {
    width: 30px;
  }
`;
