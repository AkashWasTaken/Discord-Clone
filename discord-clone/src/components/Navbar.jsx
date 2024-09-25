import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar({ activeSection, setActiveSection, onSelectServer, servers }) {
  return (
    <nav className="bg-[#1E1F22] h-screen w-[72px] flex flex-col items-center py-4 space-y-2">
      {/* Discord Icon */}
      <button onClick={() => setActiveSection("dm")} className="relative group">
        <div
          className={`absolute left-0 bg-white rounded-r-full transition-all duration-200 
          ${
            activeSection === "dm"
              ? "h-10 w-1 -translate-y-1/2 top-1/2"
              : "h-5 w-1 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2"
          }`}
        ></div>
        <div className="hover:bg-[#5865F2] p-3 rounded-2xl transition-all duration-200 ease-in-out group">
          <FontAwesomeIcon
            icon={faDiscord}
            size="2x"
            className="text-[#5865F2] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-500"
          />
        </div>
      </button>

      <div className="w-8 border-t border-gray-700 my-2"></div>

      {/* Render Server Icons */}
      {servers.map((server, index) => (
        <ServerIcon
          key={index}
          server={server.name}
          onClick={() => {
            onSelectServer(server);
            setActiveSection("channels");
          }}
        />
      ))}

      {/* Add Server Button */}
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

function ServerIcon({ server, isActive, onClick, notifications = 0 }) {
  return (
    <button
      onClick={onClick}
      className={`relative group w-12 h-12 rounded-[24px] flex items-center justify-center transition-all duration-200 ease-in-out ml-2
        ${isActive ? "bg-[#5865F2]" : "bg-[#36393F]"}
        hover:bg-[#5865F2] hover:rounded-[16px]`}
    >
      <span className="text-white font-bold text-xl">{server}</span>

      {notifications > 0 && (
        <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
          {notifications}
        </span>
      )}

      {/* Adjusted the left value to move the white indicator farther outside the icon */}
      <span
        className={`absolute left-[-10px] w-1 bg-white rounded-r-full transition-all duration-200
        ${
          isActive
            ? "h-10 -translate-y-1/2 top-1/2"
            : "h-0 opacity-0 group-hover:opacity-100 group-hover:h-5 top-1/2 -translate-y-1/2"
        }`}
      ></span>

      {/* Tooltip for the server name */}
      <span
        className="absolute left-16 bg-black text-white text-sm rounded-lg p-1 px-2 hidden group-hover:block"
        style={{ whiteSpace: "nowrap" }}
      >
        {server}
      </span>
    </button>
  );
}

export default Navbar;
