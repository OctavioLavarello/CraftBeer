import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import style from "./CardModel.module.css";
import { Link } from "react-router-dom";
import { saveDataCart } from "../LocalStorage/LocalStorage";
import { useState, useEffect } from "react"; // Agrega 'useEffect'
import { useDispatch } from "react-redux";
import { localStorageCart } from "../../redux/actions/actions";

interface CardModelProps {
    id: string;
    name: string;
    summary: string;
    image: string;
    price: number;
    stock: number;
    degreeOfAlcohol: number;
    type: string;
    IBU: number;
}

const CardModel = ({ name, summary, image, price, stock, id, type, IBU }: CardModelProps) => {

    const dispatch = useDispatch();

    const [item, setItem] = useState(0);

    // Cargar la cantidad del localStorage cuando el componente se monta
    useEffect(() => {
        const savedQuantity = localStorage.getItem(id);
        if (savedQuantity) {
            setItem(parseInt(savedQuantity));
        }
    }, [id]);

    const handlerItemCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget;
        const updatedQuantity = target.name === '+' ? item + 1 : item - 1;

        setItem(updatedQuantity);
        saveDataCart({
            key: id,
            quantity: updatedQuantity
        });

        dispatch(localStorageCart(localStorage));
    }

    const addProductoCart = () => {
        localStorage.clear();
    }

    return (
        <Container>
            <Card className={style.card}>
                <Card.Body>
                    <Row>
                        <Col className="col">
                            <div className={style.image}>
                                <p>DETALLE</p>
                                <Link className={style.link} to={`/detail/${id}`} >
                                    <img src={image} alt="" className={style.imgSize} />
                                </Link>
                            </div>
                        </Col>
                        <Col sm={4} className={style.colPrice} >
                            <div style={{ display: "flex", flexDirection: "column" }}>

                                <h3 >{name}</h3>
                                <div className={style.IBU}>
                                    <h5>Tipo: {type}</h5>
                                    <h5>IBU: {IBU}</h5>
                                </div>
                                <div className={style.textContainer}>
                                    <p>{summary}</p>
                                </div>
                                <div className={style.navButton}>
                                    <Link to={"/cart"}>
                                        <button className={style.buttonBuy} disabled={item < 1} onClick={addProductoCart}>COMPRAR</button>
                                    </Link>
                                    {item  ? <p>Tienes {item} En tu carrito !!</p> : <></>}
                                </div>
                            </div>
                        </Col>
                        <Col className={style.colPrice}>
                            <div className={style.containerInfo}>
                                <h2 className={style.title}>${price}</h2>
                                <p>☆☆☆☆☆ </p> <br /> <p className={item === stock ? style.alertOutStock : style.alertStock}>Stock Disponible : {stock} un.</p>
                                <div className={style.input}>{item } Un</div>
                                <button className={style.custom_button} name={"-"} onClick={handlerItemCart} disabled={item < 1}>-</button>
                                <button className={style.custom_button} name={"+"} onClick={handlerItemCart} disabled={item >= stock}>+</button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CardModel;
