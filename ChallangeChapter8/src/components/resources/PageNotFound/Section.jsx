import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ROUTES from "configs/routes";
import { useHistory } from "react-router-dom";
import "./section.scss";

const Section = () => {
  const history = useHistory();

  const home = () => {
    history.push(ROUTES.HOMEPAGE);
  };

  return (
    <Jumbotron
      fluid
      className="d-flex align-items-center section section--background"
    >
      <Container>
        <Row className="d-flex">
          <Col md={{ span: 6, offset: 6 }} className="text-left">
            <div className="section__title">404</div>
            <div className="text-uppercase section__caption">
              Page Not Found
            </div>
            <div className="section__body">
              OOPS, It seems the page you are looking for doesn't exist, isn't
              available or an other error occured.
            </div>

            <Button
              onClick={home}
              variant="warning"
              className="mt-3 w-50 section__button"
            >
              HOME
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Section;
