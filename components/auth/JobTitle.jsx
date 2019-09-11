/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Flip from 'react-reveal/Flip';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
  userTypeHandler,
  getJobTitles,
  getMentorType,
  userChoise
} from '../../redux/actions/authActions';
import Steps from './StepsComp';
import { theme } from '../../lib/theme';
import { Heading2, Button, Text } from '../~common/index';

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
  userId
}) => {
  const [mentorPressed, setMentorPressed] = useState(false);
  const [menteePressed, setMenteePressed] = useState(false);
  const [userType, setUserType] = useState('');
  // const [mentorError, setMentorError] = useState(true);
  const [jobTypeId, setJobTypeId] = useState(100);
  const [errors, setErrors] = useState({
    jobError: false,
    userTypeError: false,
    helpError: false
  });
  const [testError, setTestError] = useState(false);
  const [checkedValue, setCheckedValue] = useState([]);

  useEffect(() => {
    getJobTitles();
    getMentorType();
  }, []);

  const handleSelect = e => {
    if (e.target.value === 100 || e.target.value === 'Select your job title') {
      setErrors({ jobError: true });
      setTestError(true);
    } else {
      setJobTypeId(e.target.value);
      setErrors({ jobError: false });
      setTestError(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handling Job type error
    if (jobTypeId === 100) {
      setErrors({ jobError: true });
      setTestError(true);
    }

    !checkedValue.length && setErrors({ helpError: true });
    const data = {
      locationId,
      industryId: '1'
    };
    // Handling user Type Error
    if (!mentorPressed && !menteePressed) {
      setErrors({ userTypeError: true });
    } else if (jobTypeId === 100) {
      setTestError(true);
    } else {
      setTestError(false);
      checkedValue.length && handleRequest(data);
    }
  };

  //action creators request for update user information and added user choices
  const handleRequest = data => {
    checkedValue &&
      checkedValue.forEach(item => {
        userChoise({ mentorTypeId: Number(item), mentorId: userId }, userType);
      });
    userTypeHandler(data, username, userType, jobTypeId).then(res => {
      setErrors({ helpError: false });
      if (res === 201) {
        Router.push('/auth/profile-info');
      }
    });
  };

  const handleCheckBox = e => {
    if (e.target.checked) {
      setErrors({ helpError: false });
      setCheckedValue([...new Set([...checkedValue, e.target.name])]);
    } else {
      setCheckedValue(checkedValue.filter(item => item !== e.target.name));
    }
  };

  const mentor = () => {
    return (
      <div>
        <M>
          <Text small>What kind of help can you provide?</Text>
          {mentorTypes &&
            mentorTypes.map(type => {
              return (
                <Flip top key={type.id}>
                  <Label>
                    <input
                      type="checkbox"
                      name={type.id}
                      onChange={handleCheckBox}
                    />
                    {type.mentor_type_name}
                  </Label>
                </Flip>
              );
            })}
          {errors.helpError && (
            <OptionError>{err.userOptionError} </OptionError>
          )}
        </M>
      </div>
    );
  };

  const mentee = () => {
    return (
      <M>
        <Text small>What kind of help are you looking for?</Text>
        {mentorTypes &&
          mentorTypes.map(type => {
            return (
              <Flip top key={type.id}>
                <Label key={type.id}>
                  <input
                    type="checkbox"
                    name={type.id}
                    onChange={handleCheckBox}
                  />
                  {type.mentor_type_name}
                </Label>
              </Flip>
            );
          })}
        {errors.helpError && <OptionError>{err.userOptionError} </OptionError>}
      </M>
    );
  };

  const onMenteePressed = () => {
    setMenteePressed(true);
    setMentorPressed(false);
    setErrors({ userTypeError: false });
    setUserType('mentee');
  };

  const onMentorPressed = () => {
    setMenteePressed(false);
    setMentorPressed(true);
    setErrors({ userTypeError: false });
    setUserType('mentor');
  };
  return (
    <Root>
      <Steps stepNumber="3" />
      <Header>
        <Heading2 primary>Who are you?</Heading2>
        <Text small>Choose your mentorship type.</Text>
      </Header>
      <MentorIcons>
        <Custom>
          <i
            className="fas fa-user-graduate fa-6x"
            style={{ color: menteePressed && theme.primary }}
            onClick={onMenteePressed}
          />
          <Info>
            <p>Mentee</p>
            <i className="fas fa-info-circle" />
          </Info>
        </Custom>
        <Custom>
          <i
            className="fas fa-user-cog fa-6x"
            style={{ color: mentorPressed && theme.primary }}
            onClick={onMentorPressed}
          />
          <Info>
            <p>Mentor</p>
            <i className="fas fa-info-circle" />
          </Info>
        </Custom>
      </MentorIcons>
      {errors.userTypeError && <MError>{err.userTypeError}</MError>}
      <FormArea onSubmit={handleSubmit}>
        <InputWrapperJob>
          <select value={jobTypeId} onChange={handleSelect}>
            <option>What is your job title?</option>
            {allJobs &&
              allJobs.map(job => (
                <option value={job.id} key={job.tech_name}>
                  {job.tech_name}
                </option>
              ))}
          </select>
          {testError && <Error>{err.jobTypeError}</Error>}
        </InputWrapperJob>
        {menteePressed && mentee()}
        {mentorPressed && mentor()}
        <Button
          small
          primary
          type="submit"
          loadingB={loading}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </FormArea>
    </Root>
  );
};

const mapStateToProps = state => {
  return {
    username: state.authReducer.emailData.username,
    userId: state.authReducer.emailData.id,
    loading: state.authReducer.loading,
    allJobs: state.authReducer.allJobs,
    locationId: state.authReducer.locationId,
    mentorTypes: state.authReducer.allMentorOptions
  };
};

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

const MentorIcons = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  position: relative;
  i {
    color: grey;
  }
`;

const Custom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  i {
    transition: all 0.2s ease-in;

    :hover {
      cursor: pointer;
    }
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 3px;
  align-items: center;

  i {
    padding-left: 5px;
    color: black;
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

const OptionError = styled.p`
  margin: 0;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 15%;
  color: #e29273;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-left: 30px;
  input {
    width: 5px;
    height: 5px;
    padding: 12px;
    margin-right: 12px;
  }
`;

const M = styled.div`
  padding-bottom: 25px;
  position: relative;
`;
