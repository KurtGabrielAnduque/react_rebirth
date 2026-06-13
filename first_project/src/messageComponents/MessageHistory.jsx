import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'

function MessageHistory({ chatmessages }){
  const chatMessageRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessageRef.current;
    if (containerElem){
      containerElem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatmessages]) 

  const allMessage = chatmessages.map((chatmessage) => {
    return(
      <div className= 'message-box' key = {chatmessage.id}>
        <ChatMessage 
        message = {chatmessage.message}
        sender = {chatmessage.sender}
        key = {chatmessage.id}
        />
      </div>
    );
  });

  return(
    <>
      {allMessage}
      <div ref = {chatMessageRef}></div>
    </>
  );
}

export default MessageHistory