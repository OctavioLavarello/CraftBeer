import { useSelector } from "react-redux";
import { AppState } from "../../../redux/reducer";
import MyShop from "../../MyShop/MyShop";
import { useEffect, useState } from "react";
import axios from "axios";

import style from "./AdminHistoryShopBuyer.module.css"
import { useNavigate } from "react-router-dom";


const AdminHistoryShopBuyer = () => {
    const navigate = useNavigate()

    const id = useSelector((state: AppState) => state.idBuyer);
    const [infoUser, setInfoUser] = useState<any>({});
    console.log("esot es buyer id ", id);


    useEffect(() => {
        const solicitud = async () => {
            const response = await axios.get(`/persons/${id}`)
            setInfoUser(response.data);
        };
        solicitud();
    }, [id]);




    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <button className={style.button} onClick={() => navigate(`/admin/seller/${id}`)}>Volver</button>
                <h3 style={{ marginTop: "20px", marginLeft: "100px" }}>Historial de ventas de {infoUser.name}</h3>
            </div>
            <MyShop
                idPersonAdmin={id}
            />
        </div>
    )
}

export default AdminHistoryShopBuyer