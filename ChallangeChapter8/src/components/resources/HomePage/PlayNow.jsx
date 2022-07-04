import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./style/PlayNow.scss";

const PlayNow = () => (
  <Jumbotron fluid className="play-now play-now--background">
    <div className="text-uppercase font-weight-bold play-now__title">
      Play traditional game
    </div>
    <div className="play-now__caption">
      Experience new traditional game play
    </div>
    <a
      href="#"
      className="btn btn-warning text-uppercase font-weight-bold play-now__button"
    >
      Play now
    </a>

    <Container fluid className="position-relative p-0 scroller">
      <div className="mb-0 text-uppercase scroller__title">The story</div>
      <a href="#the-games">
        <span className="m-auto scroller__icon">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 16 16"
            className="bi bi-caret-down"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
            />
          </svg>
        </span>
      </a>
    </Container>
  </Jumbotron>
);

export default PlayNow;
