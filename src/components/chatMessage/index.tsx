import React from 'react';

import { Text , DarkContainer} from '../../components/util';
import { Message } from '../MessageListItem/types';
import moment from "moment";
import styled from 'styled-components/native';

export type ChatMessageProps = {
  message: Message;
  myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props;

  const isMyMessage = () => {
    return message.user.id === myId;
  }


  return (
    <Container>
      <MessageBox>
        {!isMyMessage() && <Name>{message.user.name}</Name>}
        <MessageContainer>{message.content}</MessageContainer>
        <Time>{moment(message.createdAt).fromNow()}</Time>
      </MessageBox>
    </Container>
  )
}

export default ChatMessage;



const Container = styled.View`
padding: 10px
`;

const MessageBox = styled.View`
backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
marginLeft: isMyMessage() ? 50 : 0,
marginRight: isMyMessage() ? 0 : 50,
borderRadius: 5,
padding: 10,
`;

const Name = styled(Text)`
color: white,
fontWeight: "bold",
marginBottom: 5,
`;

const MessageContainer = styled(Text)`

`;
const Time = styled(Text)`
alignSelf: "flex-end",
color: 'grey'
`;

