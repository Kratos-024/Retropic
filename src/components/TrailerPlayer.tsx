import ReactPlayer from "react-player";
export const TrailerPlayer = ({ trailer }: { trailer: string }) => {
  return (
    <div className="player-wrapper h-full bg-black">
      <ReactPlayer
        src={trailer}
        controls={true}
        width="100%"
        height="100%"
        playing={false}
      />
    </div>
  );
};
