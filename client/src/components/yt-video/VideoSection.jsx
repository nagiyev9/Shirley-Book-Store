import React from "react";
import "./videoSection.css";

const VideoSection = () => {
  return (
    <div className="video-section flex justify-center items-center h-screen md:my-16 my-0">
      <div className="video-container relative">
        <iframe
          className="video-frame"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_9VUPq3SxOc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
