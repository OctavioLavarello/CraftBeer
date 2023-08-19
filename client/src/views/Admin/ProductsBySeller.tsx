import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DahsAdmin.css";
import { toast } from "react-hot-toast";
import { Beer } from "../Detail/Detail";

const ProductsBySeller = () => {
  const id = useSelector((state: AppState) => state.idSeller);

  const [infoUser, setInfoUser] = useState<any>({});

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/${id}`);
      console.log(response.data);
      setInfoUser(response.data);
    };
    solicitud();
  }, [id]);

  let products = infoUser.Products;
  console.log(products);

  const handlerActive = async () => {
    try {
      await axios.put(`/product/${infoUser.id}`, {
        id: infoUser.id,
        status: "true",
      });
      toast.success("El producto a sido activado");
    } catch (error) {
      toast.error("No fue posible activar el producto");
    }
  };

  const handlerInactive = async () => {
    try {
      await axios.put(`/product/${infoUser.id}`, {
        id: infoUser.id,
        status: "false",
      });
      toast.success("El producto a sido desactivado");
    } catch (error) {
      toast.error("No fue posible inactivar el producto");
    }
  };

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
        <tbody style={{ textAlign: "center" }}>
          {products?.map((beer: Beer) => {
            return (
              <tr>
                <td>
                  <Link to={`/detail/${infoUser.id}`}>
                    <Button name={beer.id}>Detalle Producto</Button>
                  </Link>
                </td>
                <td>{beer.name}</td>
                <td>{beer.price} USD</td>
                <td>{beer.type}</td>
                <td>{beer.presentation}</td>
                <td>
                  {beer.qualification === null
                    ? "Sin calificar"
                    : beer.qualification}
                </td>
                <td>
                  <NavDropdown
                    title={beer.status === true ? "Activo" : "Inactivo"}
                  >
                    <NavDropdown.Item onClick={handlerActive}>
                      Activar
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handlerInactive}>
                      Inactivar
                    </NavDropdown.Item>
                  </NavDropdown>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{textAlign:"center"}}>
        <Link to="/admin">
          <Button className="botonNav" style={{width:"50%", borderRadius:"20px"}}>Volver al Panel</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsBySeller;
