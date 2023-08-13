import { Container, Card, Col, Row } from "react-bootstrap";
//import { useState } from "react";
import { Link } from "react-router-dom";

const CardUserProduct = ()=>{


    return(
        <Container style={{border:"solid red", margin:"3%"}}>
        <Card style={{backgroundColor:"#4b0909", color:"#fff",
        padding: "2% 3%",
        borderRadius:"8px",
        textAlign:"center"
      }}>
          <Card.Body style={{border:"solid red"}}>
            <Row>
              <Col>
                <Link to={"/detail/:id"}>
                  <Card.Img
                    src="https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.png"
                    style={{
                      width: "100%",
                      height: "100%",
                      marginLeft: "-10%",
                    }}
                  />
                </Link>
              </Col>
              <Col>
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
                <h3>USD </h3>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>   
    )

}

export default CardUserProduct