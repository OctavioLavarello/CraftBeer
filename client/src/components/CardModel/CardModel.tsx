
import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import style from "./CardModel.module.css"
import { Link } from "react-router-dom";

interface CardModelProps {
    name: string;
    summary: string,
    image: string,
    price: number,
    status: string
}





const CardModel = ({ name, summary, image, price, status }: CardModelProps) => {
    return (
        <Container>
            <Card className={style.card} >
                <Card.Body >
                    <Row>
                        <Col className="col">

                            <Link className={style.link} to={`/detailPage/${""}`} >
                                <Card.Img src={image}
                                    style={{ width: '180px', height: '200px' }} />
                            </Link>

                        </Col>
                        <Col sm={5} className={style.colPrice} >
                            <h3 >{name}</h3>
                            <Card.Text style={{ fontSize: "13px" }}>
                                {summary}
                            </Card.Text>
                            <Button className='p-2 ms-auto' variant="dark">COMPRAR</Button>
                            <Button className='p-2 m-2' variant="dark">AÑADIR</Button>
                        </Col>
                        <Col className={style.colPrice}>
                            <h2 className={style.title}>${price}</h2>
                            <p>☆☆☆☆☆  <br />{status}</p>
                            <InputGroup className={style.input} >
                                <InputGroup.Text id="basic-addon1" className={style.input}>0.00</InputGroup.Text>
                            </InputGroup>
                            <button className={style.custom_button}>-</button>
                            <button className={style.custom_button}>+</button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default CardModel