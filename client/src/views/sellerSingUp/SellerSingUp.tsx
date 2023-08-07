///IMPORTS
//import React, { SetStateAction } from "react";
import { useState } from "react";
import { AnyAction, Dispatch } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../sellerSingUp/selllerSingUp.css";
import { useDispatch } from "react-redux";
import {} from "../../redux/actions/actions";

// STYLES
//....

// SELLER SING UP
const SellerSingUp: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    document: 0,
    email: "",
    password: "",
    phone: 0,
    country: "",
    city: "",
    state: "",
    company: "",
    address: "",
    image: "",
  });

  return (
    <div className="bodyFormSeller">
      <h2>SELLER SING UP</h2>

      <Form
        style={{
          height: "auto",
          width: "800px",
          backgroundColor: "#A1941D",
          borderRadius: "50px",
        }}
      >
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col
            style={{
              marginTop: "30px",
            }}
          >
            <Form.Control placeholder="Nombres" />
          </Col>
          <Col
            style={{
              marginTop: "30px",
            }}
          >
            <Form.Control placeholder="Apellidos" />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Documento de identidad" />
          </Col>
          <Col>
            <Form.Control placeholder="Dirección de correo electrónico" />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col></Col>
          <Col>
            <Form.Control placeholder="Teléfono móvil" />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Pais" />
          </Col>
          <Col>
            <Form.Control placeholder="Región/Estado/Provincia" />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Ciudad" />
          </Col>
          <Col>
            <Form.Control placeholder="Código postal" />
          </Col>
        </Row>
        <a>DATOS DE MI COMPAÑÍA</a>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Nombre Empresa" />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Dirección de la empresa" />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="URL Logo o imagen" />
          </Col>
        </Row>
        <Button
          style={{
            margin: "20px",
            width: "auto",
            justifyContent: "center",
            backgroundColor: "#A37D34",
            border: "none",
            boxShadow: "5px 5px 10px black",
          }}
        >
          Crear Usuario
        </Button>
      </Form>
    </div>
  );
};

export default SellerSingUp;
