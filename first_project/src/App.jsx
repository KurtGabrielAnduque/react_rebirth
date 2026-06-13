import { useState } from 'react';
import { ChatInput } from './messageComponents/ChatInput'
import { MessageHistory } from './messageComponents/MessageHistory'
import './App.css'





function App(){
  const [chatmessages, setChatMessages] = useState([{
      message: "Hi Chat",
      sender: "user",
      id:'id1'
  },{
      message: "Hello, How can I help you?",
      sender: "robot",
      id:'id2'
  },{
      message: "can you get me todays date?",
      sender: "user",
      id:'id3'
  },{
      message: "Today is May 12, 2026 ",
      sender: "robot",
      id:'id4'
  }]);


  return(
    <div className='super-cont'>
      <div className = 'main-cont'>
        <div className = 'history-container'>
          <MessageHistory
          chatmessages = {chatmessages}
          />
        </div>
        <div>
          <ChatInput
          chatmessages = {chatmessages}
          setChatMessages = {setChatMessages}
          />
        </div>
      </div>
    </div>
  );
}

export default App
