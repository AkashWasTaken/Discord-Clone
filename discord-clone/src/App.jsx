import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DirectMessageSidebar from "./components/DirectMessageSidebar";
import ChannelList from "./components/ChannelList";
import Chat from "./components/Chat"; // Import your Chat component

const servers = [
  {
    name: "A",
    channels: [
      { name: "general", type: "text" },
      { name: "random", type: "text" },
      { name: "music", type: "voice" },
    ],
  },
  {
    name: "B",
    channels: [
      { name: "announcements", type: "text" },
      { name: "events", type: "text" },
      { name: "game-night", type: "voice" },
    ],
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("dm");
  const [currentServer, setCurrentServer] = useState(servers[0]);
  const [currentChannel, setCurrentChannel] = useState(
    currentServer.channels[0].name
  );
  const [messages, setMessages] = useState([]); // Example messages state

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSelectChannel = (channelName) => {
    setCurrentChannel(channelName);
    setMessages([]); // Optionally reset messages when changing channels
  };

  return (
    <div className="flex h-screen">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onSelectServer={setCurrentServer}
        servers={servers} // Pass servers as props
      />
      {activeSection === "dm" ? (
        <DirectMessageSidebar />
      ) : (
        <div className="flex flex-row w-full">
          <ChannelList
            channels={currentServer.channels}
            onSelectChannel={handleSelectChannel}
            activeChannel={currentChannel} // Pass active channel
          />
          <Chat
            channelName={currentChannel}
            messages={messages}
            onSend={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default App;
