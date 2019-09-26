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
import Steps from './Steps';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';
import { Icon } from 'antd';

const err = {
  jobTypeError: 'Please select a job',
  userTypeError: 'Please choose who you want to register as',
  userOptionError: 'Please select at least one field'
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

  // action creators request for update user information and added user choices
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
    <main>
      <Steps stepNumber={1} />
      <Card>
        <Content>
          <h4>Who are you?</h4>
          <FormStyles onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <select value={jobTypeId} onChange={handleSelect}>
                <option>What is your job title?</option>
                {allJobs &&
                  allJobs.map(job => (
                    <option value={job.id} key={job.tech_name}>
                      {job.tech_name}
                    </option>
                  ))}
              </select>
              {testError && <p className="error">{err.jobTypeError}</p>}
            </div>

            <h4>Choose your mentorship type</h4>
            <MentorIcons>
              <Custom onClick={onMenteePressed}>
                <img
                  src="../../static/student.png"
                  alt="Student Icon"
                  width="64px"
                  className="student"
                />

                {menteePressed ? (
                  <Icon type="check-circle" className="check-icon" />
                ) : (
                  <p>Mentee</p>
                )}
              </Custom>
              <Custom onClick={onMentorPressed}>
                <img
                  src="../../static/mentor.png"
                  alt="Mentor Icon"
                  width="64px"
                  className="mentor"
                />

                {mentorPressed ? (
                  <Icon type="check-circle" className="check-icon" />
                ) : (
                  <p>Mentor</p>
                )}
              </Custom>
            </MentorIcons>
            {errors.userTypeError && (
              <p className="error">{err.userTypeError}</p>
            )}
            <MentorshipTypes>
              {!menteePressed && !mentorPressed ? (
                <p>Types of mentorship:</p>
              ) : null}

              {menteePressed ? (
                <p>
                  As a <strong>mentee</strong>, what kind of help do you need?
                </p>
              ) : null}
              {mentorPressed ? (
                <p>
                  As a <strong>mentor</strong>, what kind of help can you
                  provide?
                </p>
              ) : null}

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
                <p className="error">{err.userOptionError} </p>
              )}
            </MentorshipTypes>

            <button type="submit" onClick={handleSubmit}>
              Next
            </button>
          </FormStyles>
        </Content>
      </Card>
    </main>
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

const MentorIcons = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 20px 0;
  cursor: pointer;
`;

const Custom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  position: relative;

  .student {
    margin-left: 2px;
  }
  .mentor {
    margin-left: -10px;
  }

  p {
    margin: 0;
    font-size: 14px;

    &:hover {
      color: #348fbb;
    }

    transition: color 0.5s ease-in;
  }

  .check-icon {
    color: #348fbb;
    margin: 3px 8px 0 0;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  input {
    width: 5px;
    height: 5px;
    padding: 12px;
    margin-right: 12px;
  }
`;

const MentorshipTypes = styled.div`
  margin-bottom: 20px;
`;
