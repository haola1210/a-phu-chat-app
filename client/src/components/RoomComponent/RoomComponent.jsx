import React from 'react'
import "./RoomComponent.css"
import { Avatar} from '@mui/material';

function RoomComponent({value, handleUserClick, chat}) {  
  const url = value?.profile?.avatar_url || "";
  const content = chat[chat.length - 1]?.content || "Have nothing messages" //handle case underfind.
  
  return (    
    <div  className="chat_header"  onClick={(e) => handleUserClick(value._id, e)} role="button" tabIndex={0}>
      <div className='chat_avatar'>
        <Avatar alt={value.title} src={url} />
          <div className="chat_headerinfo">
            <h3>{value.title}</h3>
            <p>{content}</p>                 
          </div>                      

      </div>
        
    </div>
  )
}

export default RoomComponent