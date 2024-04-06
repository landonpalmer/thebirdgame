import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WorldMap() {
  return (
    <Container style={{height: "90vh", backgroundColor: "gray", marginTop: "5vh"}}>
      <Row>
        <Col><MapText /></Col>
      </Row>
    </Container>
  );
}

function MapText() {
    document.addEventListener('DOMContentLoaded', function() {
        const mousePosText = document.getElementById('mouse-pos');
        let mousePos = { x: undefined, y: undefined };
    
        window.addEventListener('mousemove', (event) => {
            mousePos = { x: event.clientX, y: event.clientY };
            mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
        });
    
        console.log(mousePosText);
    });

    return (
    <p>Mouse pos: <b><span id="mouse-pos"></span></b></p>
    )
}





export default WorldMap;