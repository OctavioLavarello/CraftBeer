import { Container } from "react-bootstrap"
import style from "./CardMyShop.module.css"



const CardMyShop = () => {

    return (
        <Container>
            <div className={style.containerCard}>
                <div className={style.containerImg}>
                    <div></div>
                </div>
            </div>
        </Container>
    )
}

export default CardMyShop