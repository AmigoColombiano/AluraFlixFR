import React from 'react';
import styled from 'styled-components';
import { FaHome, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 1rem;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>AluraFlix</Logo>
      <Nav>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <FaHome /> Home
        </Link>
        <Link to="/new-video" style={{ color: 'white', textDecoration: 'none' }}>
          <FaVideo /> Nuevo Video
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;