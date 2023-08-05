
import { Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import style from "./CardModel.module.css"
import { Link } from "react-router-dom";

interface CardModelProps {
    id: string
    name: string;
    summary: string,
    image: string,
    price: number,
    stock: number,
    degreeOfAlcohol: number,
    type: string,
    IBU: number
}

const CardModel = ({ name, summary, image, price, stock, id, type, IBU, }: CardModelProps) => {




    return (
        <Container>
            <Card className={style.card} >
                <Card.Body >
                    <Row>
                        <Col className="col">
                            <div className={style.image}>
                                <Link className={style.link} to={`/detail/${id}`} >
                                    <img src={image} alt="" className={style.imgSize} />
                                </Link>
                            </div>
                        </Col>
                        <Col sm={5} className={style.colPrice} >

                            <h3 >{name}</h3>
                            <div style={{ height: "70px" }}>
                                <Card.Text style={{ fontSize: "13px", color: "white" }}>
                                    {summary}
                                </Card.Text>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <h5>Tipo: {type}</h5>
                                <h5>IBU: {IBU}</h5>
                            </div>

                            <Button className='p-2 ms-auto' variant="dark" >COMPRAR</Button>
                            <Button className='p-2 m-2' variant="dark">AÑADIR</Button>
                        </Col>
                        <Col className={style.colPrice}>
                            <div className={style.containerInfo}>
                                <h2 className={style.title}>${price}</h2>
                                <p>☆☆☆☆☆  <br /> Stock Disponible : {stock} un.</p>
                                <div className={style.input}>100 Un</div>
                                <button className={style.custom_button}>-</button>
                                <button className={style.custom_button}>+</button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default CardModel