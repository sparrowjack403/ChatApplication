import React from 'react';

import './Message.css';
import CryptoJS from 'crypto-js';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  if(user != 'admin'){ 
    console.log("Encrpyted text : "+text)
    var bytes = CryptoJS.AES.decrypt(text, '123');
    var text = bytes.toString(CryptoJS.enc.Utf8);
    //console.log(text);
  }

  //var Data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //console.log(Data)

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="pr-10 sentText">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="pl-10 sentText ">{user}</p>
          </div>
        )
  );
}

export default Message;
