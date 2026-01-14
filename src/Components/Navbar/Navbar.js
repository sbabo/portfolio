import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavBar bg="light" expand="lg">
      <Container>
        <NavBar.Brand as={Link} to="/">MyApp</NavBar.Brand>
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