import React from 'react';
import "./styles/Message.css";
import {Avatar} from "@material-ui/core";

const Message = () => {
    return (
        <div className="message">
            <Avatar />

            <div className="message__info">
                <h4>rookas <span className="message__timestamp">this is something</span></h4>

                <p>This is something message</p>
            </div>
        </div>
    );
};

export default Message;
