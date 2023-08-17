import {
  Card,
  Row,
  Col,
  Button,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "./DahsAdmin.css";

const DetailBuyer = () => {
    



  return (
    <div className="bodyBuyer">
      <Card style={{ width: "70%", height: "auto", margin: "1%", border:"solid black" }}>
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
            <h2>Nombre del usuario</h2>
          </NavbarBrand>
          <NavDropdown title="Opciones de Admin" menuVariant="dark">
            <NavDropdown.Item>Historial de compras</NavDropdown.Item>
            <NavDropdown.Item>Modificar usuario</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Nombre
            <input type="text" className="inputBuyer" />
          </Col>
          <Col>
            Apellido
            <input type="text" className="inputBuyer" />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Estado/Región/Provincia
            <input type="text" className="inputBuyer" />
          </Col>
          <Col>
            País
            <input type="text" className="inputBuyer" />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Documento de identidad
            <input type="text" className="inputBuyer" />
          </Col>
          <Col>
            Contraseña
            <input type="text" className="inputBuyer" />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "100%"}}>
            Ciudad
            <input type="text" className="inputBuyer" />
          </Col>
          <Col>
            Direccion de correo
            <input type="text" className="inputBuyer" />
          </Col>
        </Row>
        <div className="botonesBuyer">
          <Button>Activar Usuario</Button>
          <Button>Inactivar Usuario</Button>
          <Button>Bloquear Usuario</Button>
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
          {" "}
          Imagen del Perfil
        </Card>
        <Card
          style={{
            border: "solid black 3px",
            height: "50%",
            width: "90%",
            margin: "1%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4>Estatus de usuario</h4>
          <h6>Activo</h6>
          <h6>Inactivo</h6>
          <h6>Bloqueado</h6>
        </Card>
      </div>
    </div>
  );
};

export default DetailBuyer;
