import React from 'react';
import styled from 'styled-components';
import { FaFilm } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  padding: 1rem;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FaFilm /> AluraFlix
    </FooterContainer>
  );
};

export default Footer;