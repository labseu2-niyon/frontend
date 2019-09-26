/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';
import Steps from './Steps';
import Router from 'next/router';
import { connect } from 'react-redux';
import { locationData, locationRequest } from '../../redux/actions/authActions';
import { Icon, AutoComplete } from 'antd';
import Card from './Card';
import Content from './ContentWrapper';
import { lighten } from 'polished'

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
      <Steps stepNumber={0} />
      <Card>
        <Content>
          <h3>Where are you located?</h3>
          <Form>
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
                  <Icon
                    type="close-circle"
                    theme="twoTone"
                    twoToneColor="#e8e8e8"
                    style={{ fontSize: '25px' }}
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
          </Form>
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

const Form = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;

  .input-wrapper {
    min-height: 65px;
    display: flex;
    flex-direction: column;
    position: relative;

    i {
      position: absolute;
      z-index: 1;
      top: 12px;
      right: 8px;
      color: #348fbb;
    }
  }

  input,
  select {
    padding: 5px;
    width: 100%;
    display: block;
    color: #222222;
    border: 2px solid #ededed;
    border-radius: 5px;
    ::placeholder {
      color: #c2c2c2;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  button {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background: #348fbb;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background: ${lighten(0.1, '#348fbb')};
    }
    transition: background 1s ease;

    &:focus {
      outline: 0;
    }
  }
`;
