import { Container, Image } from "react-bootstrap";

function NotFound() {
  return (
    <Container>
      <h3 class="text-center not-found-title text-light">Oops! Page Does Not Exist</h3>
      <center>
        <Image src="/public/not-found.gif" className="not-found" fluid />
      </center>
    </Container>
  );
}

export default NotFound;