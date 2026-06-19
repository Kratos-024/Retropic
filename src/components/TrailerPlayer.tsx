import ReactPlayer from "react-player";

export const SmallTrailerPlayer = ({
  link,
  onClick,
}: {
  link: string;
  onClick: () => void;
}) => {
  return (
    <div className="w-full h-full cursor-pointer" onClick={onClick}>
      <ReactPlayer
        src={link}
        width="100%"
        height="100%"
        playing={false}
        muted
        light={true}
        playIcon={null}
        onClickPreview={() => {}}
      />
    </div>
  );
};
export const TrailerPlayer = ({ link }: { link: string }) => {
  return (
    <div className="h-full bg-black">
      {link.includes("youtu") ? (
        <ReactPlayer
          src={link}
          controls
          width="100%"
          height="100%"
          playing={false}
        />
      ) : (
        <img src={link} className="w-full h-full object-cover" />
      )}
    </div>
  );
};
