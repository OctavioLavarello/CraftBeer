
import { Container } from "react-bootstrap"
import style from "./MyShop.module.css"
import CardMyShop from "../../components/CardMyShop/CardMyShop"

const MyShop = () => {







    return (
        <>
            <Container>
                <div className={style.container}>
                    <CardMyShop/>
                </div>
              
            </Container>
        </>
    )
}
export default MyShop