import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to the Royal Palm Villas Portal</h1>
          <Navigation />
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
