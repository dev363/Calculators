import { useState, Fragment } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const OffCanvasMenu = ({ show, setShow }) => {
  return (
    <Fragment>
      <Offcanvas
        show={show}
        onHide={() => setShow(!show)}
        backdrop={true}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
          <p>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <OffCanvasMenu show={show} setShow={setShow} />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">
                <Button variant="primary" onClick={() => setShow(!show)}>
                  Launch
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
