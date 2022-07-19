import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      {/* <Container> */}
      <Navbar.Brand href="/">
        <img
          src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
          alt="beanz"
          className="w-50 p-2"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="shop_coffee">Shop Coffee</Nav.Link>
        <Nav.Link href="#roasters">Our Roasters</Nav.Link>
        <Nav.Link href="#baristas_choice">Barista's Choice</Nav.Link>
        <Nav.Link href="#cofee_lockdown">Coffee Lowdown</Nav.Link>
        <Nav.Link href="#our_story">Our Story</Nav.Link>
      </Nav>
      {/* </Container> */}
    </Navbar>
  );
};

export default NavBar;
