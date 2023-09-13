import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Course Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Courses</Nav.Link>
            <Nav.Link href="/enquiry-list">Enquires</Nav.Link>
            
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;