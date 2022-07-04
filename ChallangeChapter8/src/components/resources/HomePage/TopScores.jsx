import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style/TopScores.scss";
import twitterLogo from "assets/images/index/twitter.svg";
import evan from "assets/images/index/evan-lahti.jpg";
import jada from "assets/images/index/jada-griffin.jpg";
import aaron from "assets/images/index/aaron-williams.jpg";

const TopScores = () => (
  <Jumbotron fluid className="top-scores top-scores--background">
    <Container className="top-scores__container">
      <div className="top-scores__left">
        <div className="text-uppercase top-scores__title">Top Scores</div>
        <div className="top-scores__caption">
          This top score from various games provided on this platform
        </div>
        <Button variant="warning" size="sm" className="mt-2">
          <a href="#" className="top-scores__button">
            See more
          </a>
        </Button>
      </div>

      {/* Twitter Cards */}
      <Row className="">
        <Col
          lg={{ span: 4, offset: 8 }}
          md={{ span: 6, offset: 3 }}
          sm={{ span: 8, offset: 2 }}
        >
          <Card bg="dark" className="mb-2 card card--twitter">
            <Card.Header className="card__header">
              <img
                src={evan}
                className="img-fluid float-left card__profile-pic"
                alt="Evan Lahti"
              />
              <div className="card__name">Evan Lahti</div>
              <div className="card__username">PC Gamer</div>
              <img
                src={twitterLogo}
                className="img-fluid float-right card__twitter-logo"
                alt="twitterlogo"
              />
            </Card.Header>
            <Card.Body className="card__body">
              <Card.Title className="card__caption">
                "One of my gaming highlights of the year."
              </Card.Title>
              <Card.Text className="card__date">October 18, 2018</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col
          lg={{ span: 4, offset: 6 }}
          md={{ span: 6, offset: 3 }}
          sm={{ span: 8, offset: 2 }}
        >
          <Card bg="dark" className="mb-2 card card--twitter">
            <Card.Header className="card__header">
              <img
                src={jada}
                className="img-fluid float-left card__profile-pic"
                alt="Jada Griffin"
              />
              <div className="card__name">Jada Griffin</div>
              <div className="card__username">Nerdreactor</div>
              <img
                src={twitterLogo}
                className="img-fluid float-right card__twitter-logo"
                alt="twitterlogo"
              />
            </Card.Header>
            <Card.Body className="card__body">
              <Card.Title className="card__caption">
                "The next big thing in the world of streaming and survival
                games."
              </Card.Title>
              <Card.Text className="card__date">December 21, 2018</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col
          lg={{ span: 4, offset: 7 }}
          md={{ span: 6, offset: 3 }}
          sm={{ span: 8, offset: 2 }}
        >
          <Card bg="dark" className="mb-1 card card--twitter">
            <Card.Header className="card__header">
              <img
                src={aaron}
                className="img-fluid float-left card__profile-pic"
                alt="Aaron Williams"
              />
              <div className="card__name">Aaron Williams</div>
              <div className="card__username">Uproxx</div>
              <img
                src={twitterLogo}
                className="img-fluid float-right card__twitter-logo"
                alt="twitterlogo"
              />
            </Card.Header>
            <Card.Body className="card__body">
              <Card.Title className="card__caption">
                "Snoop Dogg Playing The Wildly Entertaining 'SOS' Is Ridiculous
              </Card.Title>
              <Card.Text className="card__date">December 24, 2018</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* End of Twitter Cards */}
    </Container>
  </Jumbotron>
);

export default TopScores;
