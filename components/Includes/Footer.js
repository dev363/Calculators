import { Navbar, Nav, Container } from "react-bootstrap";
const Footer = (props) => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
