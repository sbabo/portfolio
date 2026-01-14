import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <NavBar expand="lg" className="navbar">
      <Container>
        <NavBar.Brand as={Link} to="/">Logo</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
}
export default Navbar;