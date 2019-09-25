/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import {
  userTypeHandler,
  getJobTitles,
  getMentorType,
  userChoise
} from '../../redux/actions/authActions';
import { theme } from '../../lib/theme';
import { Button, Text } from '../~common/index';
const { TabPane } = Tabs;

const err = {
  jobTypeError: 'Please select a job',
  userTypeError: 'Please choose who you want to register as',
  userOptionError: 'Select at least one field'
};

const JobTitle = ({
  userTypeHandler,
  username,
  loading,
  getJobTitles,
  allJobs,
  locationId,
  getMentorType,
  mentorTypes,
  userChoise,
  userId,
  user
}) => {
  const [userType, setUserType] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const [jobTypeId, setJobTypeId] = useState(100);
  console.log(activeTab, userType, user);

  useEffect(() => {
    getJobTitles();
    getMentorType();
    user.mentee ? setActiveTab('1') : setActiveTab('2');
  }, []);

  useEffect(() => {
    activeTab === '1' ? setUserType('mentee') : setUserType('mentor');
  }, [activeTab]);

  const handleSelect = e => {
    e.target.value === 100 || e.target.value === 'Select your job title';
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      locationId,
      industryId: '1'
    };
    console.log(data, user.username, userType);
    // userTypeHandler(data, user.username, userType);
  };

  function callback(key) {
    //console.log(key);
    setActiveTab(key);
  }
  return (
    <Root>
      <Header>
        <Text big bold>
          Change your mentorship type
        </Text>
      </Header>
      <TabsWrapper defaultActiveKey={activeTab} onChange={callback} type="card">
        <TabPane tab="Mentee" key="1">
          <i
            className="fas fa-user-graduate fa-6x"
            style={{ color: theme.primary }}
          />
        </TabPane>
        <TabPane tab="Mentor" key="2">
          <i
            className="fas fa-user-cog fa-6x"
            style={{ color: theme.primary }}
          />
        </TabPane>
      </TabsWrapper>

      <FormArea onSubmit={handleSubmit}>
        <InputWrapperJob>
          <select value={jobTypeId} onChange={handleSelect}>
            <option>{user.job.tech_name}</option>
            {allJobs &&
              allJobs.map(job => (
                <option value={job.id} key={job.tech_name}>
                  {job.tech_name}
                </option>
              ))}
          </select>
        </InputWrapperJob>
        {/* {menteePressed && mentee()}
        {mentorPressed && mentor()} */}
        <Button
          small
          primary
          type="submit"
          loadingB={false}
          onClick={handleSubmit}
        >
          Change
        </Button>
      </FormArea>
    </Root>
  );
};

const mapStateToProps = state => ({
  username: state.authReducer.emailData.username,
  userId: state.authReducer.emailData.id,
  loading: state.authReducer.loading,
  allJobs: state.authReducer.allJobs,
  locationId: state.authReducer.locationId,
  mentorTypes: state.authReducer.allMentorOptions
});

const mapDispatchToProps = {
  userTypeHandler,
  getJobTitles,
  getMentorType,
  userChoise
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobTitle);

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  p {
    padding: 0 20px;
    text-align: center;
  }
`;

const TabsWrapper = styled(Tabs)`
  .ant-tabs-nav {
    width: 100%;
  }
  .ant-tabs-tab {
    width: 200px;
    text-align: center;
  }
  .ant-tabs-tabpane {
    display: flex;
    justify-content: center;
  }
  i {
    margin: 0 auto;
  }
`;

const FormArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 30px 0;

  button {
    margin-top: 30px;
  }

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 70%;
    display: block;
    color: #4d2d52;
    border: 1px solid rgba(77, 45, 82, 0.8);
    border-radius: 4px;
    ::placeholder {
      color: grey;
      opacity: 0.4;
    }
  }

  select {
    display: block;
    font-size: 14px;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 75%;
    border: 1px solid rgba(77, 45, 82, 0.8);
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    option {
      color: grey;
      opacity: 0.4;
    }
  }
`;

const InputWrapperJob = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
  max-width: 24rem;
`;

const Error = styled.p`
  margin: 0;
  font-size: 14px;
  position: absolute;
  bottom: 10%;
  left: 15%;
  color: #e29273;
`;

const MError = styled.p`
  margin: 0;
  font-size: 14px;
  bottom: 0;
  left: 26%;
  color: #e29273;
  text-align: center;
`;

const M = styled.div`
  padding-bottom: 25px;
  position: relative;
`;
