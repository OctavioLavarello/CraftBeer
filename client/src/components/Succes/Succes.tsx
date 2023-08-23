
import { Container } from "react-bootstrap"
import style from "./Succes.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../redux/reducer"
import axios from "axios"
import { deleteCartStorage } from "../../redux/actions/actions"

const Succes = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    // borrar el storage y estados de redux si se ejecuta la compra 
    const dataStorage = Object.keys(localStorage).filter(key => key !== "user" && key!=="mp" )
    dataStorage.forEach(key => {
        localStorage.removeItem(key);
    })


    // Redirigir automáticamente después de 4 segundos
    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate("/myShop");
        }, 2200);
        // Limpieza del timeout en la desaparición del componente
        return () => {
            clearTimeout(redirectTimeout);
        };
    }, []);


    // carga de datos para el enviar al historial de compras 
    const currentDate = new Date();
    let userPersonId = useSelector((state: AppState) => state.accessLogin.id)

    //cargar los datos de items comprados 
    let cart = useSelector((state: AppState) => state.localStorageCart)
    let cartFilter = cart.filter(el => !el.hasOwnProperty("user"))
    let dataCartItems = cartFilter.map((item) => ({
        ProductId: item.id,
        amount: item.quantity,
        totalPrice: item.quantity * item.price,
        unitPrice: item.price,
        summary: item.summary,
        image: item.image,
        name: item.name
    }))
    let totalPrice = 0
    for (let i = 0; i < dataCartItems.length; i++) {
        totalPrice = totalPrice + dataCartItems[i].totalPrice
    }

    // cargar informacion de compra en el servidor 
    const dataPay = {
        date: currentDate,
        totalPrice: totalPrice,
        userPersonId: userPersonId,
        items: dataCartItems
    }

    console.log("post Shooop",dataPay);


    useEffect(() => {
        // peticion  post al servidor 
        const postHistoryShop = async () => {

            const endpoint = "/shoppingHistory";
            try {
                const response = await axios.post(endpoint, dataPay);   
            } catch (error) {
                console.error(error);
            }
        }
        postHistoryShop()
        dispatch(deleteCartStorage())
    }, [])


    return (
        <>
            <Container>
                <div className={style.container}>
                    <div className={style.messageBuy}>
                        <h1>Tu Pago fue aprobado con exito !! </h1>
                        <p>Recibiras un correo con los detalles de tu compra.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Succes