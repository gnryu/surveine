import React, { useState } from "react";
import styled from "styled-components";

const ChatBot_Wrapper = styled.div`
  width: 400px;
  background-color: #1c2534;

  margin: 5rem;
`;

const ChatBot_Header = styled.div`
  display: flex;
`;

const ChatBot_Title = styled.h1`
  color: #F9F9F9;
`;

const ChatBot_Main = styled.div`
  border-top: 1px solid #2e3545;
  color: #A5ACBA;
`;

const BotText = styled.div`
  display: flex;
`;

const UserTextForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ChatBot_TextArea = styled.textarea`
  background-color: transparent;
  color: #F9F9F9;
`;

function ChatBot() {
  const [message, setMessage] = useState("");
  const [showChatBot, setShowChatBot] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
  };

  const handleShowChatBot = (e) => {
    setShowChatBot(!showChatBot);
  };

  return (
    <ChatBot_Wrapper>
      <ChatBot_Header>
        <ChatBot_Title>Surveine Bot</ChatBot_Title>
        <button className="chatbot-show" onClick={handleShowChatBot}>
          <img
            src="https://cdn.discordapp.com/attachments/1026481270789779487/1094184809263276074/image.png"
            alt=""
          />
        </button>
      </ChatBot_Header>
      {showChatBot && (
        <ChatBot_Main>
            <BotText>
              <img
                src="https://cdn.discordapp.com/attachments/1026481270789779487/1094185012557004920/image.png"
                alt=""
              />
              <p>템플릿 추천을 도와드립니다.</p>
            </BotText>
            <UserTextForm onSubmit={handleSubmit}>
              <ChatBot_TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </UserTextForm>
        </ChatBot_Main>
      )}
    </ChatBot_Wrapper>
  );
}

export default ChatBot;
