import React from 'react'
import "./ContactComponent.css"
import { Avatar} from '@mui/material';

function ContactComponent({value, handleUserClick}) {
  const url = value.profile?.avatar_url || ""; //handle case underfind.
  return (    
    <div  className="chat_header"  onClick={() => handleUserClick(value._id)} role="button" tabIndex={0}>
      <div className='chat_avatar'>
        <Avatar alt={value.title} src={url} />
          <div className="chat_headerinfo">
            <h3>{value.title}</h3>
            <p>Have nothing message</p>                 
          </div>                      

      </div>
        
    </div>
  )
}

export default ContactComponent