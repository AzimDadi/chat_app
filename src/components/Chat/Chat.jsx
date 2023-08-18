import React, { useContext } from "react";
import "./Chat.scss";
import CAM from "../../img/cam.png";
import ADD from "../../img/add.png";
import MORE from "../../img/more.png";
import Messages from "./Message/Messages";
import Input from "./Input/Input";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {

  const {data}= useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chat__info">
        <span>{data.user?.displayName}</span>
        <div className="chat__icons">
          <img src={CAM} alt="img" />
          <img src={ADD} alt="img" />
          <img src={MORE} alt="img" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
