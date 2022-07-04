import Cookies from "js-cookie";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ROUTES from "configs/routes";
import { useHistory } from "react-router-dom";
import "./index.scss";

const NavigationBar = () => {
  const loggedInUser = Cookies.get("username");
  const history = useHistory();

  const home = () => {
    history.push(ROUTES.HOMEPAGE);
  };
  const signup = () => {
    history.push(ROUTES.SIGNUP);
  };
  const login = () => {
    history.push(ROUTES.LOGIN);
  };

  const logout = () => {
    Cookies.remove("username");
    Cookies.remove("access_token");
    history.push(ROUTES.LOGIN);
  };

  return (
    <Navbar expand="lg" className="w-100 position-fixed">
      <Container>
        <Navbar.Brand onClick={home} className="mr-5 navbar__brand">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar__toggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={home}
              className="navbar__link navbar__link--margin"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#feature"
              className="navbar__link navbar__link--margin"
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#newsletter"
              className="navbar__link navbar__link--margin"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#social-media"
              className="navbar__link navbar__link--margin"
            >
              About Me
            </Nav.Link>
          </Nav>
          {loggedInUser ? (
            <Nav>
              <Nav.Link className="navbar__link">
                Logged in as {loggedInUser}
              </Nav.Link>
              <Button
                onClick={logout}
                variant="warning"
                className="navbar__link navbar__link--text-black"
              >
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link onClick={signup} className="navbar__link">
                Sign Up
              </Nav.Link>
              <Nav.Link onClick={login} className="navbar__link">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
