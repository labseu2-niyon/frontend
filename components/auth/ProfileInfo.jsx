import { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Upload, Icon, message } from 'antd';
import Steps from './Steps';
import {
  profileData,
  userProfileInfo,
  imageUpload
} from '../../redux/actions/authActions';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';
import Link from 'next/link';

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
      jobId: Number(props.userInfo.userTypeData)
    };
    const username = props.userInfo.emailData.username;
    const imgData = new FormData();
    imgData.append('image', image);
    image && props.imageUpload(imgData, username);
    props.userProfileInfo(data, username).then(res => {
      if (res === 200) {
        Router.push('/auth/social-info');
      }
    });
  };

  return (
    <main>
      <Steps stepNumber={2} />
      <Card>
        <Content>
          <h4>Choose your profile picture</h4>
          <FormStyles onSubmit={handleSubmit}>
            <RoundIcon
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imgUrl ? (
                <div className="image">
                  <div>
                    <img src={imgUrl} alt="avatar" />
                  </div>
                </div>
              ) : (
                <div className="upload-text">
                  <Icon type={loading ? 'loading' : 'plus'} />
                  <div className="ant-upload-text">Upload</div>
                </div>
              )}
            </RoundIcon>
            <h4>Share more about you</h4>
            <textarea
              type="text"
              placeholder="Biography"
              onChange={e => setBio(e.target.value)}
              maxLength="1501"
            />

            {bio.length > 1500 && (
              <p className="error">
                Sorry, your biography should have a maximum of 1500 characters!
              </p>
            )}

            <button type="submit">Next</button>
          </FormStyles>
        </Content>
      </Card>
      <BottomWrapper>
        <p>
          <Link href="/auth/social-info">
            <a>Skip</a>
          </Link>
        </p>
      </BottomWrapper>
    </main>
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

const RoundIcon = styled(Upload)`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100px;
    /* clip-path: circle(50% at 50% 50%); */
  }

  .ant-upload.ant-upload-select-picture-card {
    border: 2px dashed #ededed;
    /* border-radius: 50%; */
    background-color: white;
    /* width: 120px;
    height: 120px; */
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #348fbb;
  }
`;
