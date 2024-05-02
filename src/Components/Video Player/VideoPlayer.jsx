// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/student.mp4";

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({playState, setPlayState}) => {

const player = useRef(null);

const closePlayer = ()=>{
    // eslint-disable-next-line no-undef
    if(e.target === player.current){
        setPlayState(false);
    }
}

  return (
    <div className={`video-player ${playState?'':'hide'}` } ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;