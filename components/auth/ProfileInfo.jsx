import { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Text, Button, Heading2, Skip } from '../~common/index';
import { Upload, Icon, message } from 'antd';
import Steps from './StepsComp';
import {
  profileData,
  userProfileInfo,
  imageUpload
} from '../../redux/actions/authActions';

const ProfileInfo = props => {
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [imgUrl, setImgUrl] = useState(false);
  const [loading, setLoading] = useState(false);

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      setImage(info.file.originFileObj);
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false);
        setImgUrl(imageUrl);
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstName: props.userInfo.userNameData.firstName,
      lastName: props.userInfo.userNameData.lastName,
      bio: bio,
      locationId: props.userInfo.locationId,
      jobId: props.userInfo.userTypeData.job
    };
    console.log(image);
    const username = props.userInfo.emailData.username;
    const imgData = new FormData();
    imgData.append('image', image);
    props.imageUpload(imgData, username);

    props.userProfileInfo(data, username).then(res => {
      if (res === 200) {
        Router.push('/auth/social-info');
      }
    });
  };

  return (
    <Root>
      <Steps stepNumber="4" />
      <Heading2 primary>Show Us your face</Heading2>
      <FormArea onSubmit={handleSubmit}>
        <RoundIcon
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
          style={{ fontSize: '30px', padding: '20px' }}
        >
          {imgUrl ? <img src={imgUrl} alt="avatar" /> : uploadButton}
        </RoundIcon>
        <Text small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <textarea
          type="text"
          placeholder="Biography"
          onChange={e => setBio(e.target.value)}
        />
        <Button small primary type="submit" loadingB={props.loading}>
          Next
        </Button>
        <Skip href="/auth/social-info"></Skip>
      </FormArea>
    </Root>
  );
};

const mapPropsToProps = state => {
  return {
    userInfo: state.authReducer,
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
};

export default connect(
  mapPropsToProps,
  { profileData, userProfileInfo, imageUpload }
)(ProfileInfo);

const Root = styled.div`
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0 20px;
    text-align: center;
  }
`;

const RoundIcon = styled(Upload)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 130px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const FormArea = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 470px;

  @media (min-width: 500px) {
    width: 50%;
  }

  textarea {
    padding: 0.5rem;
    font-size: 16px;
    width: 70%;
    height: 120px;
    display: block;
    color: #4d2d52;
    border: 1px solid rgba(77, 45, 82, 0.8);
    border-radius: 4px;
    ::placeholder {
      color: grey;
      opacity: 0.4;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: grey;
  position: absolute;
  opacity: 0;
`;
