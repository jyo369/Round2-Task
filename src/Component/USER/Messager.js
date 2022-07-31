import React from "react";

export default function Messager({
  name,
  groupid,
  messageList,
  user,
  url,
  sendMessage,
  currentMessage,
  ele,
  setCurrentMessage,
}) {
  return (
    <div>
      <article className="form-chat1">
        <div className="chat-message">
          <h1>{name}</h1>
          <p>{groupid}</p>
          <ul>
            {messageList.map((messageContent) => {
              const msg_url =
                user.username === messageContent.author
                  ? url
                  : messageContent.url;
              return (
                <li className="item-chat">
                  <div className="person-chat">
                    <p>{messageContent.message}</p>
                  </div>

                  <span class="time-right">
                    {messageContent.time}
                    <span className="addperson">
                      <img src={msg_url} alt={msg_url}></img>
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <form class="send">
          <div className="form-chat1-control">
            <input
              type="text"
              id="message"
              name="message"
              ref={ele}
              value={currentMessage}
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
            />
            <button onClick={(e) => sendMessage(e)}>&#9658;</button>
          </div>
        </form>
      </article>
    </div>
  );
}
