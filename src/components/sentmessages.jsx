import { useState, useEffect } from "react";
import { fetchMyData } from "../API/strangerAPI";

export default function Messages({ loggedIn, user }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function messagesHandler() {
      try {
        if (loggedIn) {
          const result = await fetchMyData();
          setMessages(result.data.messages);
        }
      } catch (error) {
        console.error("Error when handling data", error);
      }
    }
    messagesHandler();
  }, []);

  function renderFromMeMessages() {
    return messages
      .filter((message) => message.fromUser.username === user)
      .map((message) => {
        return (
          <div key={message._id} className="messages">
            <h2>{message.fromUser.username}</h2>
            <h4>{message.post.title}</h4>
            <h4>{message.content}</h4>
          </div>
        );
      });
  }

  function renderToMeMessages() {
    return messages
      .filter((message) => message.fromUser.username !== user)
      .map((message) => {
        return (
          <div key={message._id} className="messages">
            <h2>{message.fromUser.username}</h2>
            <h4>{message.post.title}</h4>
            <h4>{message.content}</h4>
          </div>
        );
      });
  }

  return (
    <>
      <div className="MessageSent">{renderFromMeMessages()}</div>
      <div className="MessageRecieved">{renderToMeMessages()}</div>
    </>
  );
}
