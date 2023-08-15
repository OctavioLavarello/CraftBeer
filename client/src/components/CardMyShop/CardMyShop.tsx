import { Container } from "react-bootstrap"
import style from "./CardMyShop.module.css"

interface cardMyshop {
    name: string,
    summary: string,
    date: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number
}

const CardMyShop = ({ name, summary, date, quantity, unitPrice, totalPrice }: cardMyshop) => {

    return (
        <Container>
            <div className={style.containerReview}>
                <p>Dejar valoración de este producto</p>
                <button className={style.containerButton}>★</button>
            </div>
            <div className={style.containerCard}>
                <div className={style.containerImg}>
                </div>
                <div className={style.containerInfo}>
                    <h3>{name}</h3>
                    <h6>{summary}</h6>
                    <p>Fecha de la compra :{date}</p>
                </div>
                <div className={style.containerPrice}>
                    <h3>Cantidad</h3>
                    <h6>{quantity} unidades</h6>
                    <p>Precio unitario : {unitPrice} USD</p>
                </div>
                <div className={style.containerPriceTotal}>
                    <h3>Total</h3>
                    <h6>{totalPrice} Usd </h6>
                </div>
                <div className={style.containerState}>
                    <h3>Estado</h3>
                    <h6>pendiente de envio  </h6>
                </div>

            </div>

        </Container>
    )
}

export default CardMyShop