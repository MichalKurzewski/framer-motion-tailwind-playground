import animationData from "../../../../assets/lotties/dog.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

const Item11Lottie = () => {
  const playerRef = useRef<Player>(null);
  const handleHoverLottie = () => {
    playerRef.current?.play();
    playerRef.current?.setLoop(true);
  };
  const handleClickLottie = () => {
    playerRef.current?.play();
    playerRef.current?.setLoop(false);
  };
  return (
    <div
      className="relative div-item cursor-pointer"
      onMouseEnter={handleHoverLottie}
      onClick={handleClickLottie}
      onMouseLeave={() => playerRef.current?.setLoop(false)}
    >
      
      <div className="absolute w-40 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
        <Player src={animationData} className="player" loop ref={playerRef} />
      </div>
    </div>
  );
};

export default Item11Lottie;
