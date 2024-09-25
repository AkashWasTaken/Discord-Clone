import { useState } from "react";

export default function Chat({ channelName, messages, onSend }) {
  return (
    <div className="flex flex-col flex-grow h-full bg-[#36393F]">
      <ChannelHeader channelName={channelName} />
      <MessageList messages={messages} />
      <MessageInput onSend={onSend} />
    </div>
  );
}

function ChannelHeader({ channelName }) {
  return (
    <div className="bg-[#2F3136] p-4 flex items-center justify-between">
      <h2 className="text-white text-lg font-semibold">#{channelName}</h2>
    </div>
  );
}

function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="text-gray-400 text-center">No messages yet.</div>
      ) : (
        messages.map((message) => <Message key={message.id} {...message} />)
      )}
    </div>
  );
}

function Message({ user, content, timestamp }) {
  return (
    <div className="mb-4">
      <span className="font-semibold text-white mr-2">{user}</span>
      <span className="text-gray-400 text-xs">{timestamp}</span>
      <p className="text-gray-200">{content}</p>
    </div>
  );
}

function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now(),
        user: "You", // Temporarily hardcoded, will change later
        content: input,
        timestamp: new Date().toLocaleTimeString(),
      };
      onSend(newMessage);
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-[#40444B]">
      <input
        type="text"
        className="w-full p-3 rounded-lg bg-[#2F3136] text-white outline-none focus:ring focus:ring-[#5865F2] transition-all duration-200"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
    </div>
  );
}
