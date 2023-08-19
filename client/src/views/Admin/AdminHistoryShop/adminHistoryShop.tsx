import { useSelector } from "react-redux";
import { AppState } from "../../../redux/reducer";
import MyShop from "../../MyShop/MyShop";
import { useEffect, useState } from "react";
import axios from "axios";




const AdminHistoryShop = () => {

    const id = useSelector((state: AppState) => state.idBuyer);
    const [infoUser, setInfoUser] = useState<any>({});

    useEffect(() => {
        const solicitud = async () => {
            const response = await axios.get(`/persons/${id}`);
            setInfoUser(response.data);
        };
        solicitud();
    }, [id]);




    return (
        <div> 
            <h3 style={{marginTop:"20px",marginLeft:"100px"}}>Historial de compras de {infoUser.name}</h3>
            <MyShop
                idPersonAdmin={id}
            />
        </div>
    )
}

export default AdminHistoryShop