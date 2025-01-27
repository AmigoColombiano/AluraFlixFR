import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('https://6797c2f6c2c861de0c6de7ba.mockapi.io/api/af/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const addVideo = (video) => {
    axios.post('https://6797c2f6c2c861de0c6de7ba.mockapi.io/api/af/videos', video)
      .then(response => setVideos([...videos, response.data]))
      .catch(error => console.error('Error adding video:', error));
  };

  const updateVideo = (id, updatedVideo) => {
    axios.put(`https://6797c2f6c2c861de0c6de7ba.mockapi.io/api/af/videos/${id}`, updatedVideo)
      .then(response => {
        setVideos(videos.map(video => video.id === id ? response.data : video));
      })
      .catch(error => console.error('Error updating video:', error));
  };

  const deleteVideo = (id) => {
    axios.delete(`https://6797c2f6c2c861de0c6de7ba.mockapi.io/api/af/videos/${id}`)
      .then(() => setVideos(videos.filter(video => video.id !== id)))
      .catch(error => console.error('Error deleting video:', error));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;