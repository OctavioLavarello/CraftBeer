import "./CardShop.css"
import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

const CardShop = () => {
    return (
        <Container>
            <Card className='custom-card' >
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.png"
                                style={{ width: '300px', height: '100%', marginLeft: "-70px" }} />
                        </Col>
                        <Col sm={5}  >
                        <h3 >Ipa Negra</h3>
                            <Card.Text style={{ fontSize: "13px" }}>
                                Some quick example text to build on the card title and make up the
                                .of the card's content.of the card's content.of the card's content.'s content.of
                            </Card.Text>
                            <Button className='p-2 ms-auto' variant="dark">COMPRAR</Button>
                            <Button className='p-2 m-2' variant="dark">AÑADIR</Button>
                        </Col>
                        <Col >
                            <h2 className="title">$ 399</h2>
                            <p>☆☆☆☆☆  <br />Disponible</p>
                         
                            <InputGroup className="input " >
                                <InputGroup.Text id="basic-addon1" className="input">0.00</InputGroup.Text>
                            </InputGroup>
                            <button className='custom-button'>-</button>
                            <button className='custom-button'>+</button>
                        </Col>

                    </Row>
                </Card.Body>

            </Card>
        </Container>
    )
}
export default CardShop