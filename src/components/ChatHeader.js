import React from 'react';
import "./styles/ChatHeader.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import {HelpOutline, SearchOutlined, SendRounded} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {selectChannelId, selectChannelName} from "../features/appSlice";

const ChatHeader = ({ channelName }) => {

    return (
        <div className="chatHeader" >
            <div className="chatHeader__left">
                <h3><span className="chatHeader__hash">#</span>
                    {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />

                <div className="chatHeader__search">
                    <input type="text" placeholder="Search"/>
                    <SearchOutlined />
                </div>

                <SendRounded />
                <HelpOutline />
            </div>
        </div>
    );
};

export default ChatHeader;
