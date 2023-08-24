
import style from "./MyShop.module.css";
import CardMyShop from "../../components/CardMyShop/CardMyShop";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";


const MyShop = ({ idPersonAdmin, idCompanyAdmin }: any) => {
  let userId = "";
  const [allHistoryData, setAllHistoryData] = useState<any>([]);
  const [allHistoryDataSeller, setAllHistoryDataSeller] = useState<any>([]);

  //validar el id que ingresa si es de persona o compañia
  if (!idPersonAdmin) {
    userId = useSelector((state: AppState) => state.accessLogin.id);
  } else {
    userId = idPersonAdmin;
  }

  // si ID es compañia solicitud a la ruta usercompany si no con id de usuario
  if (idCompanyAdmin) {
    const getShopingHistory = async () => {
      try {
        // peticion  post al servidor
        const endpoint = `/usercompanysales/${idCompanyAdmin}`;
        const response = await axios.get(endpoint);
        setAllHistoryDataSeller(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getShopingHistory();
    }, []);
  } else {
    const getShopingHistory = async () => {
      try {
        // peticion  post al servidor
        const endpoint = "/shoppingHistories";
        const response = await axios.get(endpoint, {
          params: {
            userPersonId: userId,
          },
        });
        console.log("dataaa", response.data);

        setAllHistoryData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getShopingHistory();
    }, []);
  }

  console.log("estado local", allHistoryDataSeller);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.container}>
        {!idPersonAdmin && !idCompanyAdmin ? <h2>Mis compras</h2> : <></>}
        {allHistoryDataSeller.length ? (
          allHistoryDataSeller.map((historyItem: any) =>
            historyItem.Items.map((item: any) => (
              <CardMyShop
                key={item.id}
                name={item.name}
                summary={item.summary}
                date={item.updatedAt}
                quantity={item.amount}
                unitPrice={item.unitPrice}
                totalPrice={item.totalPrice}
                image={item.image}
                id={item.ProductId}
              />
            ))
          )
        ) : allHistoryData.length ? (
          allHistoryData.map((historyItem: any) =>
            historyItem.Items.map((item: any) => (
              <CardMyShop
                key={item.id}
                name={item.name}
                summary={item.summary}
                date={item.updatedAt}
                quantity={item.amount}
                unitPrice={item.unitPrice}
                totalPrice={item.totalPrice}
                image={item.image}
                id={item.ProductId}
              />
            ))
          )
        ) : (
          <div>
            <h1>At this moment there is nothing to show...</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default MyShop;
