import { Container } from "react-bootstrap"
import style from "./CardMyShop.module.css"
import { useState } from "react";

import Review from "../Review/Review";

interface cardMyshop {
    name: string,
    summary: string,
    date: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
    image: string,
    id:string
}






const CardMyShop = ({ name, date, quantity, unitPrice, totalPrice, image,id }: cardMyshop) => {


    const [isReview, setisReview] = useState(false);

    const handlerModal = () => {
        setisReview(true) 
    }

    //formatear la fecha 
    const fechaOriginal = date;
    const fecha = new Date(fechaOriginal);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${anio}`;
    
    
    
    return (
        <>
            <Container>
                <div >
                <div className={style.containerReview}>
                    <p>Dejar valoración de este producto</p>
                    <button className={style.containerButton} onClick={handlerModal}>★★★</button>
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
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "40px", paddingRight: "20px", borderLeft: "gray 1px solid", paddingLeft: "15px" }}>
                            <h3>Total</h3>
                            <h6>{totalPrice} Usd </h6>
                        </div>
                    </div>
                    <div className={style.containerState}>
                        <h3>Estado</h3>
                        <h6>Envio pendiente </h6>
                    </div>
                </div>
                </div>
               


            </Container>
            {isReview ? (
                <Review 
                name={name}
                isReview={isReview}
                setisReview={setisReview}
                id={id} 
                />
            ) : <></> 

            }

        </>

    )
}

export default CardMyShop