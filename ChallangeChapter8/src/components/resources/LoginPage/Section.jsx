import ROUTES from "configs/routes";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";
import "./section.scss";
import loginApi from "services/login";

const Section = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = () =>
    loginApi(username, password)
      .then((data) => {
        Cookies.set("username", data.username, { secure: false });
        Cookies.set("access_token", `Bearer ${data.token}`, { secure: false });
        history.push(ROUTES.HOMEPAGE);
      })
      .catch((e) => {
        console.log(e);
      });

  if (Cookies.get("username")) return <Redirect to={ROUTES.DASHBOARD} />;

  return (
    <Jumbotron
      fluid
      className="d-flex align-items-center single-section single-section--background"
    >
      <Container>
        <Row className="d-flex">
          <Col md={{ span: 6, offset: 6 }} className="text-left">
            {/* Form */}
            <div className="login-form">
              <Form.Group controlId="username">
                <Form.Label className="login-form__label">USERNAME</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="login-form__label">PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                ></Form.Control>
              </Form.Group>
              <div className="mb-3 login-form__sign-up-navigation">
                Don't have account?{" "}
                <a
                  href={ROUTES.SIGNUP}
                  className="login-form__sign-up-navigation--color"
                >
                  Sign Up Now
                </a>
              </div>
              <Button
                variant="warning"
                className="login-form__button"
                onClick={formSubmit}
              >
                LOGIN
              </Button>
            </div>
            {/* End of Form */}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Section;
