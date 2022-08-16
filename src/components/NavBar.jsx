import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import Form from "react-bootstrap/Form";
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
            alt="beanz"
            className="w-50 p-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/shop-coffee")}>
              Shop Coffee
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/our-roasters")}>
              Our Roasters
            </Nav.Link>
            <Nav.Link href="#baristas_choice">Barista's Choice</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex">
          <Form style={{ width: "100px", marginRight: "10px" }}>
            <Form.Control
              style={{ width: "90%", borderRadius: "20px" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          {/* <i className=" fa-circle-user"  style={{color:"white",fontSize:"40px",cursor:"pointer"}}></i> */}
          <i
            className="fa fa-user"
            style={{
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            aria-hidden="true"
          ></i>
          <i
            className="fa fa-shopping-cart"
            style={{
              color: "white",
              fontSize: "40px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            aria-hidden="true"
          ></i>

          <i
            className="fa fa-flag-usa"
            style={{
              color: "red",
              fontSize: "40px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            aria-hidden="true"
          ></i>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
