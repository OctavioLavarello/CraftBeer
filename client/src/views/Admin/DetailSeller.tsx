import {
  Card,
  Row,
  Col,
  Button,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "./DahsAdmin.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const DetailSeller = () => {
  const id = useSelector((state: AppState) => state.idSeller);
  const navigate = useNavigate()

  const [infoUser, setInfoUser] = useState<any>({});
  console.log("data Sellerrrrrrr",infoUser);
    

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/admin/${id}`)
      console.log(response.data);
      setInfoUser(response.data);
    };
    solicitud();
  }, [id, infoUser.status]);

  const handlerActive = async () => {
    try {
      await axios.put("/company", {
        id: infoUser.id,
        status: "true",
      });
      toast.success("El usuario a sido activado");
    } catch (error) {
      toast.error("No fue posible activar el usuario");
    }
  };

  const handlerInactive = async () => {
    try {
      await axios.put("/company", {
        id: infoUser.id,
        status: "false",
      });
      toast.success("El usuario a sido desactivado");
    } catch (error) {
      toast.error("No fue posible inactivar el usuario");
    }
  };


  const historyShop =(eventKey:any)=>{
    if(eventKey === "1")  navigate(`/admin/seller/AdminHistoryShopSeller`)
    if(eventKey === "2")  navigate(`/admin/seller/admincompanymodify`)
    }

  return (
    <div className="bodyBuyer">
      <Card
        style={{
          width: "70%",
          height: "auto",
          margin: "1%",
          border: "solid black",
        }}
      >
        <div
          style={{
            textAlign: "center",
            borderBottom: "solid black 5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <NavbarBrand>
            <h2>{infoUser.company}</h2>
          </NavbarBrand>
          <NavDropdown title="Otras opciones" menuVariant="dark" onSelect={historyShop}>
            <NavDropdown.Item eventKey="1">Historial de ventas</NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/admin/seller/products" style={{textDecoration:"none", color:"white"}}>Productos en venta</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Modificar usuario</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Nombre
            <input type="text" className="inputSeller" value={infoUser.name} />
          </Col>
          <Col>
            Apellido
            <input
              type="text"
              className="inputSeller"
              value={infoUser.lastName}
            />
          </Col>
          <Col>
            Dirección de la compañía
            <input
              type="text"
              className="inputSeller"
              value={infoUser.address}
            />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Estado/Región/Provincia
            <input type="text" className="inputSeller" value={infoUser.state} />
          </Col>
          <Col>
            País
            <input
              type="text"
              className="inputSeller"
              value={infoUser.country}
            />
          </Col>
          <Col>
            Teléfono móvil
            <input type="text" className="inputSeller" value={infoUser.phone} />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Documento de identidad
            <input
              type="text"
              className="inputSeller"
              value={infoUser.document}
            />
          </Col>
          <Col>
            Tipo de usuario
            <input type="text" className="inputSeller" value={infoUser.role} />
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "100%" }}>
            Ciudad
            <input type="text" className="inputSeller" value={infoUser.city} />
          </Col>
          <Col>
            Direccion de correo
            <input type="text" className="inputSeller" value={infoUser.email} />
          </Col>
          <Col></Col>
        </Row>
        <div className="botonesBuyer">
          <Link to="/admin" style={{ width: "30%", height:"100%" }}>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#A37D34",
                border: "none",
                height:"100%"
              }}
            >
              Volver al Panel
            </Button>
          </Link>
          <Button
            onClick={handlerActive}
            style={{ width: "20%", backgroundColor: "black", border: "none", height:"100%" }}
          >
            Activar Usuario
          </Button>
          <Button
            onClick={handlerInactive}
            style={{
              width: "20%",
              height: "100%",
              backgroundColor: "black",
              border: "none",
            }}
          >
            Inactivar Usuario
          </Button>
        </div>
      </Card>
      <div className="bodyImage">
        <Card
          style={{
            height: "50%",
            width: "90%",
            margin: "1%",
            border: "solid black 3px",
          }}
        >
          {infoUser.image === null ? (
            "Imagen no disponible"
          ) : (
            <img
              src={infoUser.image}
              alt={infoUser.name}
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </Card>
        <Card
          style={{
            border: "solid black 3px",
            height: "50%",
            width: "90%",
            margin: "1%",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Estatus de usuario</h4>
          {infoUser.status === true ? (
            <h2 className="activoUser">Activo ✅</h2>          ) : (
            <h2 className="inactiveUser">Inactivo 🚫</h2>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DetailSeller;
