import './App.scss';
import Project from './Project';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Project />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
