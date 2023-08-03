import { Container, Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CardCart.css";

const CardCart = () => {
  const [contador, setContador] = useState(0);
  const [precio] = useState(55);

  const handlerCounter = (event: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLButtonElement, EventTarget>) => {
    if (event.currentTarget.value === "+") {
      setContador((prevContador) => prevContador + 1);
    }
    if (contador >= 1) {
      if (event.currentTarget.value === "-") {
        setContador((prevContador) => prevContador - 1);
      }
    }
  };

  // let precioPagar = contador * precio;
  return (
    <Container>
      <Card className="custom-card">
        <Card.Body>
          <Row>
            <Col>
              <Link to={"/detail/:id"}>
                <Card.Img
                  src="https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.png"
                  style={{
                    width: "300px",
                    height: "100%",
                    marginLeft: "-70px",
                  }}
                />
              </Link>
            </Col>
            <Col sm={1}>
              <Card.Title>Card Title</Card.Title>
            </Col>
            <Col sm={5}>
              <Card.Text style={{ fontSize: "13px" }}>
                Some quick example text to build on the card title and make up
                the .of the card's content.of the card's content.of the card's
                content.'s content.of
              </Card.Text>
            </Col>
            <Col>
              <h3>USD {precio}</h3>
              <Button
                onClick={handlerCounter}
                className="custom-button"
                variant="dark"
                value="-"
              >
                -
              </Button>
              <a>{contador}</a>
              <Button
                onClick={handlerCounter}
                className="custom-button"
                variant="dark"
                value="+"
              >
                +
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default CardCart;
