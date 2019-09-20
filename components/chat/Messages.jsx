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
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState('');
  const [emojis, setEmojis] = useState(false);

  if (message.length === 0) {
    socket.emit('typing', '');
  } else if (message.length > 0) {
    scrollToBottom();
    socket.emit('typing', currentUser.username);
  }

  const type = userTyping ? (
    <TYPEWRAPPER>
      <PulseLoader sizeUnit={'px'} size={8} color={'#123abc'} loading={true} />
      <p>
        <span>{userTyping}</span> is typing
      </p>
    </TYPEWRAPPER>
  ) : (
    ''
  );

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
        <p style={{ padding: '3px' }}>{type}</p>
        <div ref={messagesEndRef} />
      </Window>

      <div>
        <InputWrapper onSubmit={handleSend}>
          <Input
            placeholder="enter your message..."
            allowClear
            onChange={e => {
              setMessage(e.target.value);
              socket.emit('typing', { user: currentUser.username, type: true });
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
  margin: 20px;
  border: 1px solid #cecece;
  align-items: center;
  border-radius: 4px;

  .ant-input {
    border: none;
    color: #858585;
  }

  }
  button {
    width: 20%;
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

const TYPEWRAPPER = styled.div`
  display: flex;
  color: lightGrey;
  padding-right: 25px;
  font-style: italic;
  bottom: 20%;
  position: relative;
  span {
    text-transform: uppercase;
    margin-left: 10px;
  }
  p {
  }
`;
