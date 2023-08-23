
import { Container } from "react-bootstrap"
import style from "./MyShop.module.css"
import CardMyShop from "../../components/CardMyShop/CardMyShop"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/reducer"

const MyShop = ({ idPersonAdmin, idCompanyAdmin }: any) => {
    let userId = "";
    const [allHistoryData, setAllHistoryData] = useState<any>([])
    const [allHistoryDataSeller, setAllHistoryDataSeller] = useState<any>([])

    //validar el id que ingresa si es de persona o compañia 
    if (!idPersonAdmin) {
        userId = useSelector((state: AppState) => state.accessLogin.id)
    } else {userId = idPersonAdmin }
    

    // si ID es compañia solicitud a la ruta usercompany si no con id de usuario 
    if (idCompanyAdmin) {

        const getShopingHistory = async () => {
            try {
                // peticion  post al servidor 
                const endpoint = `/usercompanysales/${idCompanyAdmin}`;
                const response = await axios.get(endpoint);
                setAllHistoryDataSeller(response.data)

            } catch (error) {
                console.error(error);
            }
        }
        useEffect(() => {
            getShopingHistory()
        }, [])
    } else {
        const getShopingHistory = async () => {
            try {
                console.log("id user",userId);
                
                // peticion  post al servidor 
                const endpoint = "/shoppingHistories";
                const response = await axios.get(endpoint, {
                    params: {
                        userPersonId: userId
                    }
                });
                console.log("my shooooop", response.data);

                setAllHistoryData(response.data)

            } catch (error) {
                console.error(error);
            }
        }
        useEffect(() => {
            getShopingHistory()
        }, [])
    }
console.log(allHistoryData);


    return (

        <Container>
            <div className={style.container}>
                {!idPersonAdmin && !idCompanyAdmin ? (<h2>Mis compras</h2>) : (<></>)}
                {allHistoryDataSeller.length ? (
                    allHistoryDataSeller.map((item: any) =>
                    (<CardMyShop
                        key={item.id}
                        name={item.name}
                        summary={item.summary}
                        date={item.date}
                        quantity={item.amount}
                        unitPrice={item.unitPrice}
                        totalPrice={item.totalPrice}
                        image={item.image}
                        id={item.ProductId}
                    />
                    ))
                ) : (
                    allHistoryData.length ? (
                        allHistoryData.map((item: any) =>
                        (<CardMyShop
                            key={item.Items[0]?.id}
                            name={item.Items[0]?.name}
                            summary={item.Items[0]?.summary}
                            date={item.Items[0]?.updatedAt}
                            quantity={item.Items[0]?.amount}
                            unitPrice={item.Items[0]?.unitPrice}
                            totalPrice={item.Items[0]?.totalPrice}
                            image={item.Items[0]?.image}
                            id={item.Items[0]?.ProductId}
                        />
                        ))
                    ) : (
                        <div>
                            <h1>Aún no ha realizado ninguna compra </h1>
                        </div>


                    )
                )}


            </div>
        </Container>

    )
}
export default MyShop