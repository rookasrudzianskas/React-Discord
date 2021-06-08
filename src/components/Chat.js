import React from 'react';
import "./styles/Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import {EmojiEmotions} from "@material-ui/icons";
import Message from "./Message";

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat__messages">
                <Message  />
                <Message  />
                <Message  />
                <Message  />
                <Message  />
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />

                <form action="">
                    <input type="text" placeholder={`Message #TEST`}/>
                    <button className="chat__inputButton" type="submit">Send the message</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotions fontSize="large" />

                </div>
            </div>
        </div>
    );
};

export default Chat;
