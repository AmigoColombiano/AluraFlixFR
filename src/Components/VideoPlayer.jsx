import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const VideoPlayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
`;

const VideoPlayerModal = ({ videoUrl, onClose }) => {
  return (
    <VideoPlayerContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <PlayerWrapper>
        <ReactPlayer 
          url={videoUrl} 
          controls 
          playing 
          width="100%" 
          height="100%" 
        />
      </PlayerWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayerModal;
