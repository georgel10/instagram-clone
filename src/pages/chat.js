import React from 'react';
import {Text} from 'react-native';

import {
  ChatContainer,
  ChatCoverPicture,
  ChatHeaderContainer,
  ChatTitle,
  ChatBackButton,
  BobbleNavigationBox,
  BobbleNavigationLinks,
} from './styles';

export default function Chat() {
  return (
    <ChatContainer>
      {/* <ChatCoverPicture source="image" /> */}
      <ChatHeaderContainer>
        <ChatTitle>Club Porsche España</ChatTitle>
        <ChatBackButton>Volver</ChatBackButton>
      </ChatHeaderContainer>

      <BobbleNavigationBox>
        <BobbleNavigationLinks>#Chat</BobbleNavigationLinks>
        <BobbleNavigationLinks>#Chats 100Km</BobbleNavigationLinks>
        <BobbleNavigationLinks>#Pilotos de cataluña</BobbleNavigationLinks>
      </BobbleNavigationBox>
    </ChatContainer>
  );
}
