/* eslint-disable */
import { useState, useEffect } from 'react';
import { Text, Heading2 } from '../~common/index';
import { Button } from 'antd';

import styled from 'styled-components';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  locationData,
  locationRequest,
  userProfileInfo,
  saveLocationId
} from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';

const Location = ({
  locationRequest,
  locationData,
  user,
  saveLocationId,
  locationId,
  userProfileInfo
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState({ state: false, data: '' });
  const [warning, setWarning] = useState('');
  const [input, setInput] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    user.mentee ? setUserType('mentee') : setUserType('mentor');
  }, []);

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
    //saveLocationId(user.location.id);
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
          const data = {
            firstName: user.first_name,
            lastName: user.last_name,
            bio: user.bio,
            locationId: locationId,
            jobId: '5' //not sure how to take job id from the user yet
          };

          setLoading(false);
          setWarning('');
          userProfileInfo(data, user.username);
        }
      }));
  };

  return (
    <Root>
      <div style={{ marginRight: '20px' }}>
        <Auto onSubmit={handleSubmit}>
          <AutoComplete
            onChange={getPossibleLocation}
            onSelect={chosen}
            style={{ width: 200 }}
            dataSource={data}
            // autoFocus={true}
            placeholder={`${user.location.city_name}, ${user.location.country_name}`}
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
      <Button primary small onClick={handleSubmit} loading={loading}>
        Save Location
      </Button>
    </Root>
  );
};

const mapStateToProps = state => {
  return {
    locationId: state.authReducer.locationId
  };
};

export default connect(
  mapStateToProps,
  { locationData, locationRequest, userProfileInfo, saveLocationId }
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
