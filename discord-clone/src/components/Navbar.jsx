import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      {/* Main container for the sidebar */}
      <div className="bg-[#1E1F22] h-screen w-[72px] flex flex-col items-center py-4 space-y-4">
        {/* Discord logo */}
        <a
          href="#"
          className="hover:bg-[#5865F2] p-3 rounded-2xl transition-all duration-300 ease-in-out group"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            size="2x"
            className="text-white group-hover:rotate-12 transition-transform"
          />
        </a>

        {/* Divider with some margin for better spacing */}
        <div className="w-8 border-t border-gray-600 my-2"></div>

        {/* Server icons */}
        {["A", "B", "C"].map((server, index) => (
          <a
            key={index}
            href="#"
            className="bg-[#36393F] hover:bg-[#5865F2] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out group relative"
          >
            
            <span className="text-white font-bold text-xl">{server}</span>
            <span className="absolute left-16 bg-[#40444B] text-white text-sm font-semibold px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform translate-x-1 transition-transform duration-200">
              Server {server}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
