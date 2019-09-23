/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Card, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import ChatMessage from './ChatMessage';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const Chat = ({
  chatHistory,
  currentUser,
  socket,
  currentRequestId,
  currentConnectionId,
  userTyping
}) => {
  const [message, setMessage] = useState('');
  const [emojis, setEmojis] = useState(false);

  if (message.length === 0) {
    socket.emit('typing', '');
  } else if (message.length > 0) {
    scrollToBottom();
    socket.emit('typing', currentUser.username);
  }

  function scrollToBottom() {
    const messages = document.getElementById('chatBox');
    messages.scrollTop = messages.scrollHeight;
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory.length]);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 1000);
    socket.on('newChat', data => {
      socket.emit('chatOpen', currentConnectionId);
    });
  }, []);

  const handleSend = e => {
    e.preventDefault();
    setTimeout(() => {
      scrollToBottom();
    }, 400);
    const dataForTheServer = {
      sender: currentUser.id,
      receiver: currentRequestId,
      message,
      connectionId: currentConnectionId
    };

    if (message.length) {
      socket.emit('messegeAdd', dataForTheServer);
      setMessage('');
    }
  };

  const addEmoji = e => {
    let emoji = e.native;
    setMessage(message + emoji);
    toggleEmojis();
  };

  function toggleEmojis() {
    setEmojis(!emojis);
  }

  return (
    <Wrapper>
      <Window id="chatBox">
        {chatHistory &&
          chatHistory.map((user, i) => {
            return (
              currentUser && (
                <ChatMessage key={i} user={user} currentUser={currentUser} />
              )
            );
          })}
      </Window>

      <div>
        <div>
          <InputWrapper onSubmit={handleSend}>
            <input
              placeholder="enter your message..."
              allowClear
              onChange={e => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <Icon
              type="smile"
              style={{ fontSize: '18px' }}
              className="icon"
              onClick={toggleEmojis}
            />
          </InputWrapper>
          {emojis ? (
            <Emojis>
              <Picker
                title="Pick your emoji…"
                emoji="point_up"
                onSelect={addEmoji}
              />
            </Emojis>
          ) : null}
        </div>
        {userTyping ? (
          <UserTyping>
            <p>
              <span>{userTyping}</span> is typing
            </p>
            <PulseLoader
              sizeUnit={'px'}
              size={2}
              color={'#c2c2c2'}
              loading={true}
            />
          </UserTyping>
        ) : (
          <UserTyping></UserTyping>
        )}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentRequestId: state.authReducer.requestId,
    currentConnectionId: state.authReducer.connectionId
  };
};

export default connect(
  mapStateToProps,
  {}
)(Chat);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 250px;
  width: 100%;
  height: 100vh;

  .ant-card-bordered {
    border: none;
  }
`;

const Window = styled(Card)`
  overflow-y: scroll;
  margin: 15px;
  padding: 0;
`;

const InputWrapper = styled.form`
  display: flex;
  margin: 0 20px;
  border: 1px solid #cecece;
  align-items: center;
  border-radius: 4px;

  input {
    border: none;
    width: 100%;
    margin: 5px 10px;
  }

  input::placeholder {
    color: #bfbfbf;
  }

  input:hover {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  .icon {
    margin-right: 10px;
    color: #348fbb;
    cursor: pointer;
  }
`;

const Emojis = styled.div`
  position: absolute;
  bottom: 55px;
  right: 20px;
`;

const UserTyping = styled.div`
  display: flex;
  color: #c2c2c2;
  font-style: italic;
  margin: 5px 20px;
  padding: 0px 10px;
  min-height: 30px;
  p {
    margin-right: 2px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;
