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
  console.log(infoUser);
  
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
  

  const handlerActive = async (event:any) => {
    try {
      const idProduct = event?.target.name
      const activar = {
        companyId: infoUser.id,
        status: "true"
      }
      console.log(idProduct);
      await axios.put(`/product/${idProduct}`, activar);
      toast.success("Product has been activated");
    } catch (error) {
      toast.error("Product could not be activated");
    }
  };

  const handlerInactive = async (event: any) => {
    try {
      const idProduct = event?.target.name
      const inactivar = {
        companyId: infoUser.id,
        status: "false"
      }
      console.log(idProduct);
      await axios.put(`/product/${idProduct}`, inactivar);
      toast.success("Product has been inactivated");
    } catch (error) {
      toast.error("Product could not be inactivated");
    }
  };

  return (
    <div style={{ margin: "0.5%" }}>
      <Table striped bordered hover variant="" responsive>
        <thead className="bordeTabla">
          <tr className="bordeTabla">
            <th className="anchoTable">Detail</th>
            <th className="anchoTable">Beer name</th>
            <th className="anchoTable">Price</th>
            <th className="anchoTable">Beer type</th>
            <th className="anchoTable">Presentation</th>
            <th className="anchoTable">Rating</th>
            <th className="anchoTable">Status</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {products?.map((beer: Beer) => {
            return (
              <tr>
                <td>
                  <Link to={`/detail/${beer.id}`}>
                    <Button name={beer.id}>Beer detail</Button>
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
                    title={beer.status === true ? "Active" : "Inactive"}
                  >
                    <NavDropdown.Item onClick={handlerActive} name={beer.id}>
                      Activate
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handlerInactive} name={beer.id}>
                      Inactivate
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
          <Button className="botonNav" style={{width:"50%", borderRadius:"20px"}}>Back to Panel</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsBySeller;
