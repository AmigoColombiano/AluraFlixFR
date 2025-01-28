import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../Contexts/VideoContext';
import { useNavigate } from 'react-router-dom';

const NewVideoContainer = styled.div`
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #1a1a1a;
  color: white;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #1a1a1a;
  color: white;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const NewVideo = () => {
  const { addVideo } = useContext(VideoContext);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    title: '',
    category: '',
    imageUrl: '',
    videoUrl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formValues);
    navigate('/');
  };

  const handleClear = () => {
    setFormValues({
      title: '',
      category: '',
      imageUrl: '',
      videoUrl: '',
      description: ''
    });
  };

  return (
    <NewVideoContainer>
      <h1>Nuevo Video</h1>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>Título</Label>
          <Input type="text" id="title" name="title" value={formValues.title} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Categoría</Label>
          <Input type="text" id="category" name="category" value={formValues.category} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Imagen URL</Label>
          <Input type="text" id="imageUrl" name="imageUrl" value={formValues.imageUrl} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Video URL</Label>
          <input type="text" id="videoUrl" name="videoUrl" value={formValues.videoUrl} onChange={handleChange} required />
        </FormField>
        <FormField>
          <Label>Descripción</Label>
          <TextArea id="description" name="description" value={formValues.description} onChange={handleChange} required />
        </FormField>
        <ButtonContainer>
          <Button type="submit">Guardar</Button>
          <Button type="button" onClick={handleClear}>Limpiar</Button>
        </ButtonContainer>
      </Form>
    </NewVideoContainer>
  );
};

export default NewVideo;