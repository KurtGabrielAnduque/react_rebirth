import React from 'react'
import robot from '../assets/robot-icon-isolated-contour-symbol-illustration-vector.jpg'
import user from '../assets/Sample_User_Icon.png'

function ChatMessage(props){
  const message = props.message;
  const theSender = props.sender;

  if (theSender === 'robot'){
    return(
    <div className= 'robot'>
      <img src= {robot} alt="user_icon" width = '50' className = 'image'/>
      <p className ='messages'>{message}</p>
      
    </div>
  );
  }else{
    return(
    <div className = 'human'>
      <p className = 'messages'>{message}</p>
      <img src= {user} alt="user_icon" width = '50' className = 'image'/>
    </div>
  );
  }
}

export default ChatMessage