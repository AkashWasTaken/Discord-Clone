import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [activeServer, setActiveServer] = useState(null);
  const servers = ["A", "B", "C"];

  return (
    <nav className="bg-[#1E1F22] h-screen w-[72px] flex flex-col items-center py-4 space-y-2">
      <a
        href="#"
        className="hover:bg-[#5865F2] p-3 rounded-2xl transition-all duration-200 ease-in-out group"
      >
        {" "}
        <FontAwesomeIcon
          icon={faDiscord}
          size="2x"
          className="text-[#5865F2] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500"
        />
      </a>
      <div className="w-8 border-t border-gray-700 my-2"></div>

      {servers.map((server, index) => (
        <ServerIcon
          key={index}
          server={server}
          isActive={activeServer === index}
          onClick={() => setActiveServer(index)}
        />
      ))}

      <a
        href="#"
        className="bg-[#36393F] hover:bg-[#3BA55D] w-12 h-12 rounded-[24px] flex items-center justify-center transition-all duration-200 ease-in-out group mt-2 hover:rounded-[16px]"
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="text-[#3BA55D] group-hover:text-white transition-colors"
        />
      </a>
    </nav>
  );
}

function ServerIcon({ server, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative group w-12 h-12 rounded-[24px] flex items-center justify-center transition-all duration-200 ease-in-out
        ${isActive ? "bg-[#5865F2]" : "bg-[#36393F]"}
        hover:bg-[#5865F2] hover:rounded-[16px]`}
    >
      <span className="text-white font-bold text-xl">{server}</span>

      <span
        className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-200
        ${
          isActive
            ? "h-10 -translate-y-1/2 top-1/2"
            : "h-0 opacity-0 group-hover:opacity-100 group-hover:h-5 top-1/2 -translate-y-1/2"
        }`}
      ></span>

      <span
        className="absolute left-16 bg-black text-white text-sm font-medium px-2 py-1 rounded shadow-lg 
        opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none"
      >
        Server {server}
      </span>
    </button>
  );
}
