import { Container } from "react-bootstrap"
import style from "./CardMyShop.module.css"

interface cardMyshop {
    name: string,
    summary: string,
    date: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
    image: string
}

const CardMyShop = ({ name, date, quantity, unitPrice, totalPrice, image }: cardMyshop) => {
    // formatear fecha 


    const fechaOriginal = date;
    const fecha = new Date(fechaOriginal);

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${anio}`;
    return (
        <Container>
            <div className={style.containerReview}>
                <p>Dejar valoración de este producto</p>
                <button className={style.containerButton}>★★★</button>
            </div>
            <div className={style.containerCard}>
                <div className={style.image}>
                    <img src={image} alt="" />
                </div>
                <div className={style.containerInfo}>
                    <h3>{name}</h3>
                    <p>Fecha de la compra : {fechaFormateada}</p>
                </div>

                <div className={style.containerPriceTotal}>
                    <div className={style.containerPrice}>
                    <p>CANTIDAD : {quantity} Unidad/s</p>
                    <p> PRECIO UNITARIO : {unitPrice} US$</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"40px",paddingRight:"20px",borderLeft:"gray 1px solid", paddingLeft:"15px"}}>
                    <h3>Total</h3>
                    <h6>{totalPrice} Usd </h6>
                    </div>
              
                </div>
                <div className={style.containerState}>
                    <h3>Estado</h3>
                    <h6>Envio pendiente </h6>
                </div>

            </div>

        </Container>
    )
}

export default CardMyShop