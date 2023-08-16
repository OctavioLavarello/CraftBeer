
import { Container } from "react-bootstrap"
import style from "./MyShop.module.css"
import CardMyShop from "../../components/CardMyShop/CardMyShop"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/reducer"

const MyShop = () => {

    let userId = useSelector((state: AppState) => state.accessLogin)
    const [allHistoryData, setallHistoryData] = useState<any>([])
    const getShopingHistory = async () => {
        try {
            // peticion  post al servidor 
            const endpoint = "/shoppingHistories";
            const response = await axios.get(endpoint, {
                params: {
                    userPersonId: userId.id
                }
            });
            setallHistoryData(response.data)


        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getShopingHistory()
    }, [])

    console.log(allHistoryData);



    return (
        <>
            <Container>
                <div className={style.container}>
                    <h2>Mis compras</h2>
                    {allHistoryData.map((item:any) =>
                    (<CardMyShop
                        name={item.name}
                        summary={item.summary}
                        date={item.date}
                        quantity={item.amount}
                        unitPrice={item.unitPrice}
                        totalPrice={item.totalPrice}
                    />

                    ))}


                </div>

            </Container>
        </>
    )
}
export default MyShop