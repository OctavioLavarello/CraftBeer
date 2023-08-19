
import { Container } from "react-bootstrap"
import style from "./MyShop.module.css"
import CardMyShop from "../../components/CardMyShop/CardMyShop"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/reducer"

const MyShop = ({ idPersonAdmin }: any) => {
    let userId = "";
    if (!idPersonAdmin) {
        userId = useSelector((state: AppState) => state.accessLogin.id)
    } else userId = idPersonAdmin

    const [allHistoryData, setallHistoryData] = useState<any>([])
    const getShopingHistory = async () => {
        try {
            // peticion  post al servidor 
            const endpoint = "/shoppingHistories";
            const response = await axios.get(endpoint, {
                params: {
                    userPersonId: userId
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




    return (

        <Container>
            <div className={style.container}>
                {!idPersonAdmin? (<h2>Mis compras</h2>):(<></>)}
           
                {allHistoryData.map((item: any) =>
                (<CardMyShop
                    key={item.Items[0].id}
                    name={item.Items[0].name}
                    summary={item.Items[0].summary}
                    date={item.Items[0].updatedAt}
                    quantity={item.Items[0].amount}
                    unitPrice={item.Items[0].unitPrice}
                    totalPrice={item.Items[0].totalPrice}
                    image={item.Items[0].image}
                    id={item.Items[0].ProductId}
                />
                ))}
            </div>
        </Container>

    )
}
export default MyShop