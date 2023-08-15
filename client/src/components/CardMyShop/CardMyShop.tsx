import { Container } from "react-bootstrap"
import style from "./CardMyShop.module.css"

const CardMyShop = () => {

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
                    <h3>TITULO</h3>
                    <h6>descripcion del productoaaaaa</h6>
                    <p>Fecha de la compra : 12 / 23</p>
                </div>
                <div className={style.containerPrice}>
                    <h3>Cantidad</h3>
                    <h6>9 unidades</h6>
                    <p>Precio unitario : 3 USD</p>
                </div>
                <div className={style.containerPriceTotal}>
                    <h3>Total</h3>
                    <h6>34 Usd </h6>
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