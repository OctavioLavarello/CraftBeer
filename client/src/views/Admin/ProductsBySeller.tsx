import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Table, Button} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./DahsAdmin.css"

const ProductsBySeller = ()=> {
  const id = useSelector((state: AppState)=>state.idSeller)  
  
  const [infoUser, setInfoUser] = useState<any>({});

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/${id}`);
      console.log(response.data);
      setInfoUser(response.data);
    };
    solicitud();
  }, [id]);

  let products = infoUser.Products
  console.log(products);
  

return (
    <div style={{ margin: "0.5%" }}>
     
      <Table striped bordered hover variant="" responsive>
        <thead className="bordeTabla">
          <tr className="bordeTabla"> 
            <th className="anchoTable">Detalle</th>
            <th className="anchoTable">Nombre del producto</th>
            <th className="anchoTable">Precio</th>
            <th className="anchoTable">Tipo de cerveza</th>
            <th className="anchoTable">Presentación</th>
            <th className="anchoTable">Calificación</th>
            <th className="anchoTable">Estatus</th>
          </tr>
        </thead>
        <tbody>
            {products?.map((beer:any) =>{
              return(
                <tr>
                  <td>
                  <Link to={`/admin`}>
                      <Button name={beer.id} >
                        Detalle Producto
                      </Button>
                    </Link>
                  </td>
                  <td>{beer.name}</td>
                  <td>{beer.price} USD</td>
                  <td>{beer.type}</td>
                  <td>{beer.presentation}</td>
                  <td>{beer.qualification === null ? "Sin calificar" : beer.qualification}</td>
                  <td>{beer.status === true ? "Activo" : "Inactivo"}</td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
)
}

export default ProductsBySeller