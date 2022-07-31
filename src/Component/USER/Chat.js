import React, { useState } from "react";
import { data } from "./data.js";
import { groupdatadump } from "./groupdata";
import { io } from "socket.io-client";
import { useEffect } from "react";
import "./chat.css";
import { message } from "./message.js";
import { useRef } from "react";
import Grouplist from "./Search.js";
import Search from "./Search.js";
import Messager from "./Messager.js";

const socket = io.connect("http://localhost:3001");
const Chat = ({ user }) => {
  const [groupdata, setgroupdata] = useState(groupdatadump);
  const [name, setname] = useState("Please Join Group");
  const [groupid, setgroupid] = useState("Group id");
  const [people, setPeople] = useState(data);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const ele = useRef(null);
  const available = data.findIndex((obj) => obj.firstName === user.name);
  const url = data[available].url;
  const uname = data[available].firstName;
  console.log(url);
  useEffect(() => {
    ele.current.focus();
  });
  const updateChange = (chatname, id, group) => {
    if (group === true) {
      setname(chatname);
      setgroupid(id);
    } else {
      setname(id);
      setgroupid(chatname);
    }
    socket.emit("join_room", id);
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        room: groupid,
        author: uname,
        message: currentMessage,
        url: url,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="main-chat">
        <div className="chat">
          <Search
            groupdata={groupdata}
            updateChange={updateChange}
            people={people}
            uname={uname}
          />
        </div>
        <Messager
          name={name}
          groupid={groupid}
          messageList={messageList}
          user={user}
          url={url}
          sendMessage={sendMessage}
          currentMessage={currentMessage}
          ele={ele}
          setCurrentMessage={setCurrentMessage}
        />
      </div>
    </>
  );
};
export default Chat;
