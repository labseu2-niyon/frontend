/* eslint-disable */
import { useState } from 'react';
import { Text, Heading2, Button } from '../~common/index';
import styled from 'styled-components';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  locationData,
  locationRequest,
  userTypeHandler
} from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';

const Location = ({
  locationRequest,
  locationData,
  userType,
  user,
  userTypeHandler
}) => {
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
        .catch(error => {
          //console.log(error);
        });
  };
  const chosen = value => {
    setSelect({ state: true, data: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {};
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
          userTypeHandler(data, username, userType, jobTypeId);
        }
      }));
  };

  return (
    <Root>
      <div>
        <Auto onSubmit={handleSubmit}>
          <AutoComplete
            onChange={getPossibleLocation}
            onSelect={chosen}
            style={{ width: 200 }}
            dataSource={data}
            // autoFocus={true}
            placeholder="Choose new Location"
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
      </div>
      <Button primary small onClick={handleSubmit} loadingB={loading}>
        Save Location
      </Button>
    </Root>
  );
};

export default connect(
  state => state,
  { locationData, locationRequest, userTypeHandler }
)(Location);

const Root = styled.div`
  display: flex;
`;

const IconT = styled.i`
  font-size: 100px;
  color: green;
`;
const Auto = styled.form`
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
