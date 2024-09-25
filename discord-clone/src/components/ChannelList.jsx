import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function ChannelList({
  channels,
  onSelectChannel,
  activeChannel,
}) {
  return (
    <div className="bg-[#202225] w-full p-3">
      <div className="text-gray-400 text-xs font-semibold">
        TEXT CHANNELS ({channels.length})
      </div>
      {channels.map((channel, index) => (
        <button
          key={index}
          onClick={() => onSelectChannel(channel.name)}
          className={`flex items-center mt-2 text-sm text-gray-300 hover:bg-[#34373C] rounded px-2 py-1 transition-all ${
            activeChannel === channel.name ? "bg-[#34373C]" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={channel.type === "text" ? faHashtag : faVolumeUp}
            className="mr-2"
          />
          {channel.name}
        </button>
      ))}
    </div>
  );
}
