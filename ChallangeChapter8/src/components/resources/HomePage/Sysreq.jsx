import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './style/Sysreq.scss';

const Sysreq = () => (
  <Jumbotron fluid className="sysreq sysreq--background">
    <Container>
      <div className="sysreq__caption">Can My Computer Run This Game?</div>
      <Row>
        <Col lg={6}>
          <div className="text-left text-uppercase sysreq__title">System Requirement</div>

          {/* Table */}
          <Table striped bordered hover className="table">
            <tbody>
              <tr>
                <td>
                  <div className="table__aspect">OS:</div>
                  <div className="table__spec">Windows 7 64-bit only<br />(No OSX support at this time)</div>
                </td>
                <td>
                  <div className="table__aspect">Processor:</div>
                  <div className="table__spec">Intel Core 2 Duo @2.4GHz or AMD Athlon X2 @ 2.8GHz</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table__aspect">Memory:</div>
                  <div className="table__spec">4 GB RAM</div>
                </td>
                <td>
                  <div className="table__aspect">Storage:</div>
                  <div className="table__spec">8 GB available space</div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className="table__aspect">Graphics:</div>
                  <div className="table__spec">
                    NVIDIA GeForce GTX 660 2GB or<br />AMD Radeon HD 7850 2GB
                    DirectX11 (Shader Model S)
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          {/* End of Table */}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Sysreq;