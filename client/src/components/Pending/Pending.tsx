import { Container } from "react-bootstrap"
import style from "./Pending.module.css"


const Pending =()=>{
    
    return (
        <>
            <Container>
                <div className={style.container}>
                    <div className={style.messageBuy}>
                        <h1>Estamos procesando tu pago</h1>
                        <p>Aguarda en instantes recibiras un correo con los detalles de tu compra.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}


export default Pending