import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import {EmojiEmotions} from "@material-ui/icons";
import Message from "./Message";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {selectChannelId, selectChannelName} from "../features/appSlice";
import db from "../firebase";
import firebase from "firebase";

const Chat = () => {


    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(channelId){
        db.collection("channels").doc(channelId).collection('messages').orderBy('timestamp', "desc").onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
        }
    }, [channelId]);

    const sendMessage = e => {
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (
                    <Message
                        key={message.message}
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />

                <form action="">
                    <input disabled={!channelId} value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`Message #TEST`}/>
                    <button onClick={sendMessage} disabled={!channelId}  className="chat__inputButton" type="submit">Send the message</button>
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
