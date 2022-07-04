import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style/Newsletter.scss';

const Newsletter = () => (
  <Jumbotron fluid className="d-flex align-items-center newsletter newsletter--background" id="newsletter">
    <Container>
      <Row className="d-inline-flex">
        <Col md={{ span: 6, offset: 6 }} className="text-left">
          <div className="newsletter__caption">Want to stay in touch?</div>
          <div className="text-uppercase newsletter__title">Newsletter Subscribe</div>
          <div className="text-justify newsletter__body">In case to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of you. We will send you emails containing information about game. We don't spam.</div>

          {/* Form */}
          <Form.Row className="position-relative newsletter-form">
            <Col md="7">
              <Form.Group controlId="newsletter-form.email">
                <Form.Label className="newsletter-form__email-input-label">Your Email Address</Form.Label>
                <Form.Control type="text" placeholder="youremail@binar.co.id" className="my-3 pt-3 bg-dark newsletter-form__email-input"></Form.Control>
              </Form.Group>
            </Col>
            <Col md="5">
              <Button type="submit" variant="warning" className="my-3 mb-3 w-100 newsletter-form__button">Subscribe Now</Button>
            </Col>
          </Form.Row>
          {/* End of Form */}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Newsletter;