import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";

import InsertCommentIcon from "@material-ui/icons/InsertComment";
import OutsideClickHandler from "react-outside-click-handler";
import firebase from "../firebase";
import "./Chatbot.css";
import { ThemeProvider } from "styled-components";

function ChatBotcomponent() {
  const [disp, setDisp] = useState(false);

  const [chat, setChat] = useState("");
  const [dispArrow, setDispArrow] = useState(true);
  const iconStyle = { fontSize: "5rem", color: "green" };
  const displayChat = () => {
    setDisp(!disp);
  };
  useEffect(() => {
    setTimeout(() => {
      setDispArrow(false);
    }, 5000);
    return () => {};
  }, []);
  useEffect(() => {
    const chatRref = firebase.database().ref("djamila-vitrine");
    chatRref.push(chat);
  }, [chat]);
  console.log(chat);
  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setDisp(false)}>
        {disp && (
          <ThemeProvider
            theme={{
              background: "#f5f8fb",
              headerBgColor: "green",
              headerFontColor: "#111",
              headerFontSize: "20px",
              botBubbleColor: "green",

              botFontColor: "#111",
              userBubbleColor: "#fff",
              userFontColor: "green",
            }}
          >
            <ChatBot
              steps={[
                {
                  id: "1",
                  message:
                    "Coucou c'est Djamila laissez nous votre adress mail si vous souhaiter etre recontacter",
                  trigger: "2",
                },
                {
                  id: "2",
                  user: true,
                  validator: (value) => {
                    setChat(value);
                    return true;
                  },
                  trigger: "3",
                },
                {
                  id: "3",
                  message:
                    "Merci pour votre message nous vous recontacterons si il le faut",
                  trigger: "2",
                },
              ]}
            />
          </ThemeProvider>
        )}

        <div onClick={displayChat} className="chaticonn">
          <InsertCommentIcon style={iconStyle} />
        </div>
        {dispArrow && (
          <div className="arrow_box">
            Hey coucou vous pouvez nous laisser un message
          </div>
        )}
      </OutsideClickHandler>
    </>
  );
}

export default ChatBotcomponent;
