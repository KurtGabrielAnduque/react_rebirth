import { useState } from 'react'
import { Chatbot } from 'supersimpledev';

function ChatInput({ chatmessages, setChatMessages }){
  const [enteredMessage, setMessage] = useState('');
  
  function inputMessage(event){
    setMessage(event.target.value);
  }

  function sendMessage(){
    const newChatMessages = [
      ...chatmessages,
      {message: enteredMessage , sender: 'user', id: crypto.randomUUID()}            
    ];


    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(enteredMessage);
    setChatMessages([
      ...newChatMessages,
      {message: response , sender: 'robot', id: crypto.randomUUID()}            
    ]); 
    // CLEAR the input after pressing enter
    setMessage('');
  }

  function handleSubmit(event){
    if(event.key === 'Enter'){
      sendMessage();
    }
  }

  return(
    <div className = "Chat-Input">
      <input 
      type="text" 
      placeholder = "Entere you prompt here!!"
      onChange = {inputMessage}
      value = {enteredMessage}
      style = {{borderColor: 'black'}} 
      className = 'text-input'
      onKeyDown = {handleSubmit}
      />

      <button onClick = {sendMessage} className = "send-button">Send</button>
    </div>
  );
}

export default ChatInput