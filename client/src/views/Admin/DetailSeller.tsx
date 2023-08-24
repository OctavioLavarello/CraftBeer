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
  const navigate = useNavigate();

  const [infoUser, setInfoUser] = useState<any>({});
  console.log("data Sellerrrrrrr", infoUser);

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/admin/${id}`);
      console.log(response.data);
      setInfoUser(response.data);
    };
    solicitud();
  }, [id, infoUser]);

  const handlerActive = async () => {
    try {
      await axios.put("/company", {
        id: infoUser.id,
        status: "true",
      });
      toast.success("User has been activated");
    } catch (error) {
      toast.error("It was not possible to activate the user");
    }
  };

  const handlerInactive = async () => {
    try {
      await axios.put("/company", {
        id: infoUser.id,
        status: "false",
      });
      toast.success("User has been inactivated");
    } catch (error) {
      toast.error("It was not possible to inactivate the user");
    }
  };

  const historyShop = (eventKey: any) => {
    if (eventKey === "1") navigate(`/admin/seller/AdminHistoryShopSeller`);
    if (eventKey === "2") navigate(`/admin/seller/admincompanymodify`);
  };

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
          <NavDropdown
            title="Otras opciones"
            menuVariant="dark"
            onSelect={historyShop}
          >
            <NavDropdown.Item eventKey="1">
              Historial de ventas
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to="/admin/seller/products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Productos en venta
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Edit user</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Name
            <input type="text" className="inputSeller" value={infoUser.name} />
          </Col>
          <Col>
            Last Name
            <input
              type="text"
              className="inputSeller"
              value={infoUser.lastName}
            />
          </Col>
          <Col>
            Company Address
            <input
              type="text"
              className="inputSeller"
              value={infoUser.address}
            />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            State
            <input type="text" className="inputSeller" value={infoUser.state} />
          </Col>
          <Col>
            Country
            <input
              type="text"
              className="inputSeller"
              value={infoUser.country}
            />
          </Col>
          <Col>
            Phone Number
            <input type="text" className="inputSeller" value={infoUser.phone} />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Identity card
            <input
              type="text"
              className="inputSeller"
              value={infoUser.document}
            />
          </Col>
          <Col>
            User Type
            <input type="text" className="inputSeller" value={infoUser.role} />
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "100%" }}>
            City
            <input type="text" className="inputSeller" value={infoUser.city} />
          </Col>
          <Col>
            Email
            <input type="text" className="inputSeller" value={infoUser.email} />
          </Col>
          <Col></Col>
        </Row>
        <div className="botonesBuyer">
          <Link to="/admin" style={{ width: "30%", height: "100%" }}>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#A37D34",
                border: "none",
                height: "100%",
              }}
            >
              Back to Panel
            </Button>
          </Link>
          <Button
            onClick={handlerActive}
            style={{
              width: "20%",
              backgroundColor: "black",
              border: "none",
              height: "100%",
            }}
          >
            Activate User
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
            Inactivate User
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
            "Image not available"
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
            <h2 className="activoUser">Activo ✅</h2>
          ) : (
            <h2 className="inactiveUser">Inactivo 🚫</h2>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DetailSeller;
