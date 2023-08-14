
import { Container } from "react-bootstrap"
import style from "./MyShop.module.css"
import { useState } from "react"

const MyShop = () => {

    const [messageSucces, setMessageSucces] = useState(true)
    setTimeout(() => {
        setMessageSucces(false)
    }, 4000);

    return (
        <>
            <Container>
                <div className={style.container}>
                {messageSucces ? (
                    <div className={style.messageBuy}>
                        <h1>Tu Pago fue aprobado con exito !! </h1>
                        <p>Recibiras un correo con los detalles de tu compra.</p>
                    </div>
                ) : <></>}
                </div>
              
            </Container>
        </>
    )
}
export default MyShop