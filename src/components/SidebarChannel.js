import React from 'react';
import "./styles/SidebarChannel.css";

const SidebarChannel = (channel) => {

    return (
        <div className="sidebarChannel">
            <h4><span className="sidebarChannel__hash">#</span>{channel.channel.channel.channelName}</h4>
        </div>
    );
};

export default SidebarChannel;
