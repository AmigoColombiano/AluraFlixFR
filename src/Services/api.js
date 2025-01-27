import axios from 'axios';

const API_BASE_URL = 'https://6797c2f6c2c861de0c6de7ba.mockapi.io/api/af';

export const getVideos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener videos', error);
    throw error;
  }
};

export const addVideo = async (newVideo) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/videos`, newVideo);
    return response.data;
  } catch (error) {
    console.error('Error al agregar video', error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    await axios.delete(`${API_BASE_URL}/videos/${videoId}`);
  } catch (error) {
    console.error('Error al eliminar video', error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/videos/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar video', error);
    throw error;
  }
};