/// IMPORTS
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "../Creation/Creation.css";
import CardCart from "../../components/CardCart/CardCart";
// STYLES
//.....

// CREATION
const Creation = () => {
  const [input, setInput] = useState({
    name: "",
    image: "",
    type: "",
    degreeOfAlcohol: "",
    description: "",
    qualification: "",
    price: 0,
    stock: 0,
    presentation: 0,
    IBU: 0,
  });

  const handlerSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  };
  const handlerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="bodyFormP">
      <Form
        style={{
          width: "650px",
          height: "auto",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
          border: "solid red",
          justifyContent: "center",
        }}
        onSubmit={handlerSubmit}
      >
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              name="name"
              placeholder="Nombre del pruducto"
              onChange={handlerChange}
            />
          </Col>
          <Col>
            <InputGroup className="mb-2">
              <Form.Control
                onChange={handlerChange}
                placeholder="Precio"
                name="price"
              />
              <InputGroup.Text>USD</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              placeholder="IBU"
              name="IBU"
              onChange={handlerChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Stock"
              name="stock"
              onChange={handlerChange}
            />
          </Col>
        </Row>
        <Row style={{ margin: "15px", justifyContent: "center" }}>
          <Col>
            <Form.Control
              placeholder="Tipo de cerveza"
              name="type"
              onChange={handlerChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Graduación alcohólica"
              name="degreeOfAlcohol"
              onChange={handlerChange}
            />
          </Col>
          {/* <Form.Group controlId="" className="mb-3">
          <Form.Label>Seleccionar su imagen</Form.Label>
          <Form.Control type="file" />
        </Form.Group> */}
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              placeholder="URL Imagen del producto"
              name="image"
              onChange={handlerChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Tipo de presentación"
              name="presentation"
              onChange={handlerChange}
            />
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              style={{ height: "100px" }}
              placeholder="Descripción del producto"
              name="description"
              onChange={handlerChange}
            />
          </Col>
        </Row>
        <Button
          type="submit"
          style={{
            margin: "20px",
            width: "auto",
            justifyContent: "center",
            backgroundColor: "#A37D34",
            border: "none",
          }}
        >
          Cargar Producto
        </Button>
      </Form>
      <div className="bodyMisArt">
        <span className="spamMisArt">
          <strong>MIS ARTÍCULOS PUBLICADOS</strong>
        </span>
        <CardCart />
      </div>
    </div>
  );
};

export default Creation;
