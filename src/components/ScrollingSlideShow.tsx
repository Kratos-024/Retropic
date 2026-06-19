import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SmallTrailerPlayer } from "./TrailerPlayer";

const slides = [
  "./public/got-chain.jpg",
  "./public/tekken.jpg",
  "./public/Got.jpg",
  //   "./public/got-chain.jpg",
  //   "./public/tekken.jpg",
];

export const ScrollingSlideShow = ({
  mediaLinkHandler,
  trailerLink,
}: {
  mediaLinkHandler: (link: string) => void;
  trailerLink: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImg = slides[currentIndex];
  return (
    <div className="  relative mt-5">
      <div className="rounded-full bg-[#101014] p-2 z-50 left-30 bottom-[35%]  cursor-pointer w-fit absolute">
        <FaAngleLeft className="w-[28px] h-[28px] hover:opacity-90" />
      </div>
      <div className="  w-[700px]  mx-auto  opacity-90 relative grid grid-cols-4  gap-2">
        <div className=" mt-2 rounded-xl w- aspect-video overflow-hidden bg-black">
          <SmallTrailerPlayer
            link={trailerLink}
            onClick={() => mediaLinkHandler(trailerLink)}
          />
        </div>
        {slides.map((imgs) => {
          return (
            <div
              onClick={() => {
                mediaLinkHandler(imgs);
              }}
              className="relative  mt-2 rounded-xl  aspect-video overflow-hidden bg-black"
            >
              <img
                src={imgs}
                alt="Ghost of Tsushima"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}{" "}
      </div>
      <div className=" rounded-full bg-[#101014] p-2 z-50 right-30  bottom-[35%]    cursor-pointer w-fit absolute">
        <FaAngleRight className="w-[28px] h-[28px] hover:opacity-90" />
      </div>
    </div>
  );
};
