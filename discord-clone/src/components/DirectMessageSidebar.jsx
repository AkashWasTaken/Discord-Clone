import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faInbox,
  faEllipsisV,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DirectMessageSidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const directMessages = [
    { name: "User1", avatarUrl: "", status: "online" },
    { name: "User2", avatarUrl: "", status: "dnd" },
    { name: "User3", avatarUrl: "", status: "idle" },
  ];

  return (
    <div
      className={`bg-[#2F3136] ${
        isCollapsed ? "w-16" : "w-60"
      } h-screen flex flex-col transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 text-gray-300 hover:text-white"
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          className={`transform transition-transform duration-200 ${
            isCollapsed ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {!isCollapsed && (
        <>
          <div className="p-3">
            <input
              type="text"
              placeholder="Find or start a conversation"
              className="w-full bg-[#202225] text-gray-200 placeholder-gray-400 px-3 py-1.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
            />
          </div>

          <NavButton
            icon={faUserFriends}
            text="Friends"
            isActive={activeItem === "Friends"}
            onClick={() => setActiveItem("Friends")}
          />
          <NavButton
            icon={faInbox}
            text="Inbox"
            isActive={activeItem === "Inbox"}
            onClick={() => setActiveItem("Inbox")}
          />

          <div className="px-4 py-2 text-gray-400 text-xs font-semibold mt-4">
            DIRECT MESSAGES
          </div>

          {directMessages.map((user, index) => (
            <DMButton
              key={index}
              text={user.name}
              avatarUrl={user.avatarUrl}
              status={user.status}
              isActive={activeItem === user.name}
              onClick={() => setActiveItem(user.name)}
            />
          ))}
        </>
      )}
    </div>
  );
}

function NavButton({ icon, text, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-2 mx-2 py-1.5 rounded text-sm font-medium transition-colors duration-200
        ${
          isActive
            ? "bg-[#393C43] text-white"
            : "text-gray-300 hover:bg-[#34373C] hover:text-gray-100"
        }`}
      title={text}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-4" />
      <span>{text}</span>
    </button>
  );
}

function DMButton({ text, isActive, onClick, avatarUrl, status = "online" }) {
  const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
  };

  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-between px-2 mx-2 py-1.5 rounded text-sm font-medium transition-colors duration-200
        ${
          isActive
            ? "bg-[#393C43] text-white"
            : "text-gray-300 hover:bg-[#34373C] hover:text-gray-100"
        }`}
      title={text}
    >
      <div className="flex items-center">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={text}
            className="w-8 h-8 rounded-full mr-3"
          />
        ) : (
          <div className="relative w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center mr-3">
            {text[0].toUpperCase()}
            <span
              className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#2F3136] ${statusColors[status]}`}
            ></span>
          </div>
        )}
        <span>{text}</span>
      </div>
      <FontAwesomeIcon
        icon={faEllipsisV}
        className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          isActive ? "text-gray-200" : "text-gray-400"
        }`}
      />
    </button>
  );
}
