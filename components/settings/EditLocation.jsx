/* eslint-disable */
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Text } from '../../components/~common/index';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  locationDataForSettings,
  locationRequest,
  userProfileInfo,
  saveLocationId
} from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';

const Location = ({
  locationRequest,
  locationDataForSettings,
  user,
  jobId,
  userProfileInfo
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState({ state: false, data: '' });
  const [warning, setWarning] = useState('');
  const [input, setInput] = useState('');
  const [userType, setUserType] = useState('');
  const [job, setJobid] = useState(null);

  useEffect(() => {
    jobId && setJobid(jobId[0].id);
  }, [jobId]);

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
      locationDataForSettings({
        cityName: inwork[0].trim(),
        countryName: inwork[1].trim()
      }).then(res => {
        console.log(res);
        if (res.status === 201) {
          const data = {
            firstName: user.first_name,
            lastName: user.last_name,
            bio: user.bio,
            locationId: res.id,
            jobId: job
          };
          console.log(data);
          setLoading(false);
          setWarning('');
          userProfileInfo(data, user.username);
        }
      }));
  };

  return (
    <Root>
      <Text big bold>
        Change Your Location
      </Text>
      <LocationSection>
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
      </LocationSection>
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
  { locationDataForSettings, locationRequest, userProfileInfo, saveLocationId }
)(Location);

const LocationSection = styled.section`
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

const Root = styled.div`
  margin-top: 50px;
  p {
    text-align: center;
  }
`;

const Auto = styled.form`
  display: flex;
  align-items: center;
`;

const Error = styled.p`
  margin: 0;
  font-size: 14px;
  bottom: 10%;
  left: 26%;
  color: #e29273;
`;
