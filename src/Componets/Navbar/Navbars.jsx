import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarstyle.css';

const  Navbars = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Navbar id="navbars" collapseOnSelect expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          Scale
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/addmoney')}>Add Money</Nav.Link>
            <Nav.Link onClick={() => navigate('/expence')}>Add Expense</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
