import { Image, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <h1 className="text-center home-title">FAFO</h1>
      <Container>
        <Row>
          <Col>
            <Image src="../public/codeimg.jpg" id="home-img" rounded />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;