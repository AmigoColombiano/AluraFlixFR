import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../Contexts/VideoContext';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';

const HomeContainer = styled.div`
  padding: 2rem;
`;

const Banner = styled.div`
  background-image: url('https://via.placeholder.com/1200x400');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 768px) {
    height: 200px;
    font-size: 1.5rem;
  }
`;

const Category = styled.div`
  margin-top: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
`;

const VideoCard = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background-color: #222;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  align-items: center;
  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    margin-right: 1rem;
  }
  .info {
    flex-grow: 1;
  }
  .actions {
    display: flex;
    gap: 1rem;
    button {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
      height: auto;
      margin-right: 0;
      margin-bottom: 1rem;
    }
    .actions {
      justify-content: center;
    }
  }
`;

const Home = () => {
  const { videos, deleteVideo, updateVideo } = useContext(VideoContext);
  const [showModal, setShowModal] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [formValues, setFormValues] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleClose = () => setShowModal(false);
  const handleShow = (video) => {
    setEditingVideo(video);
    setFormValues({
      title: video.title,
      category: video.category,
      imageUrl: video.imageUrl,
      videoUrl: video.videoUrl,
      description: video.description
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = () => {
    updateVideo(editingVideo.id, formValues);
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este video?')) {
      deleteVideo(id);
    }
  };

  return (
    <HomeContainer>
      <Banner>Bienvenido a AluraFlix</Banner>
      <Category>
        <h2>Frontend</h2>
        {videos.filter(video => video.category === 'Frontend').map(video => (
          <VideoCard key={video.id}>
            <img src={video.imageUrl} alt={video.title} />
            <div className="info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleShow(video)}><FaEdit /></button>
              <button onClick={() => handleDelete(video.id)}><FaTrash /></button>
            </div>
          </VideoCard>
        ))}
      </Category>
      <Category>
        <h2>Backend</h2>
        {videos.filter(video => video.category === 'Backend').map(video => (
          <VideoCard key={video.id}>
            <img src={video.imageUrl} alt={video.title} />
            <div className="info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleShow(video)}><FaEdit /></button>
              <button onClick={() => handleDelete(video.id)}><FaTrash /></button>
            </div>
          </VideoCard>
        ))}
      </Category>
      <Category>
        <h2>Innovación y Gestión</h2>
        {videos.filter(video => video.category === 'Innovación y Gestión').map(video => (
          <VideoCard key={video.id}>
            <img src={video.imageUrl} alt={video.title} />
            <div className="info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleShow(video)}><FaEdit /></button>
              <button onClick={() => handleDelete(video.id)}><FaTrash /></button>
            </div>
          </VideoCard>
        ))}
      </Category>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Título</label>
              <input type="text" className="form-control" id="title" name="title" value={formValues.title} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Categoría</label>
              <input type="text" className="form-control" id="category" name="category" value={formValues.category} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">Imagen URL</label>
              <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={formValues.imageUrl} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="videoUrl" className="form-label">Video URL</label>
              <input type="text" className="form-control" id="videoUrl" name="videoUrl" value={formValues.videoUrl} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Descripción</label>
              <textarea className="form-control" id="description" name="description" value={formValues.description} onChange={handleChange} required />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </HomeContainer>
  );
};

export default Home;