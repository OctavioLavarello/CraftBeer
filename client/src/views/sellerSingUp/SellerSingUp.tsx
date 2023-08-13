///IMPORTS
import { useState } from "react";
import { AnyAction, Dispatch } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../sellerSingUp/selllerSingUp.css";
import { useDispatch } from "react-redux";
import { createdCompany } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
//import { toast } from "react-hot-toast";

// STYLES
//....

// SELLER SING UP
const SellerSingUp: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction> | any>();

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

  const [errors, setErrors] = useState({
    name: "Debe indicar su nombre",
    lastName: "Debe indicar su apellido",
    document: "Debe indicar su número de documento de identidad",
    email: "Debe indicar un correo electrónico valido",
    password: "Proporcione una contraseña",
    phone: "Debe indicar un número valido",
    country: "Debe indicar su país de residencia",
    city: "Debe indicar su ciudad de residencia",
    state: "Debe indicar el estado/región/provincia donde reside",
    company: "Debe indicar el nombre de su compañía",
    address: "Debe indicar la dirección de la compañía",
    image: "Debe proporcionar una imagen del logo de su compañía",
  });

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
    dispatch(createdCompany(input));
    setInput({
      ...input,
    });
  };
  
  
  console.log(input);
  

  const validation = (input: any, name: any) => {
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Información requerida" });
    }
    if (name === "lastName") {
      if (input.lastName !== "") setErrors({ ...errors, lastName: "" });
      else setErrors({ ...errors, image: "Información requerida" });
    }
    if (name === "document") {
      if (input.document !== "") setErrors({ ...errors, document: "" });
      else setErrors({ ...errors, document: "Información requerida" });
    }
    if (name === "email") {
      if (input.email !== "") setErrors({ ...errors, email: "" });
      else setErrors({ ...errors, email: "Información requerida" });
    }
    if (name === "password") {
      if (input.password !== "") {
        if (/^(?=.*[A-Z])(?=.*[0-9]).+$/.test(input.password)) {
          setErrors({ ...errors, password: "" });
        } else {
          setErrors({ ...errors, password: "La contraseña debe contener al menos una letra mayúscula y un número" });
        }
      } else {
        setErrors({ ...errors, password: "Información requerida" });
      }
    }
    if (name === "phone") {
      if (input.phone !== "") setErrors({ ...errors, phone: "" });
      else setErrors({ ...errors, phone: "Información requerida" });
    }
    if (name === "country") {
      if (input.country !== "") setErrors({ ...errors, country: "" });
      else setErrors({ ...errors, country: "Información requerida" });
    }
    if (name === "city") {
      if (input.city !== "") setErrors({ ...errors, city: "" });
      else setErrors({ ...errors, city: "Información requerida" });
    }
    if (name === "state") {
      if (input.state !== "") setErrors({ ...errors, state: "" });
      else setErrors({ ...errors, state: "Información requerida" });
    }
    if (name === "company") {
      if (input.company !== "") setErrors({ ...errors, company: "" });
      else setErrors({ ...errors, company: "Información requerida" });
    }
    if (name === "address") {
      if (input.address !== "") setErrors({ ...errors, address: "" });
      else setErrors({ ...errors, address: "Información requerida" });
    }
    if (name === "image") {
      if (input.image !== "") setErrors({ ...errors, image: "" });
      else setErrors({ ...errors, image: "Información requerida" });
    }
  };

  const handlerChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    validation(
      {
        ...input,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const disable = (errors: { [key: string]: string }): boolean => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  };

  return (
    <div className="bodyFormSeller">
      <Form
        style={{
          height: "auto",
          width: "60%",
          backgroundColor: "#A1941D",
          borderRadius: "50px",
          marginTop: "3%",
          marginLeft: "20%",
          marginBottom: "3%",
        }}
        onSubmit={handlerSubmit}
      >
        <Row
          style={{
            margin: "15px",
          }}
        >
          <h5 style={{ marginTop: "5%" }}>
            Crea tu usuario de vendedor. Propociona la siguiente información:
          </h5>
          <div className="centrado">
            <strong>USUARIO</strong>
          </div>
          <Col
            style={{
              marginTop: "30px",
            }}
          >
            <Form.Control
              placeholder="Correo electrónico"
              onChange={handlerChange}
              name="email"
            />
            <h6 className="errorCompany">{errors.email}</h6>
          </Col>
          <Col
            style={{
              marginTop: "30px",
            }}
          >
            <Form.Control
              placeholder="Contraseña"
              onChange={handlerChange}
              name="password"
              type="password"
            />
            <h6 className="errorCompany">{errors.password}</h6>
          </Col>
        </Row>
        <div className="centrado">
          <strong>DATOS PERSONALES</strong>
        </div>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Nombres"
              onChange={handlerChange}
              name="name"
            />
            <h6 className="errorCompany">{errors.name}</h6>
          </Col>
          <Col>
            <Form.Control
              placeholder="Apellidos"
              onChange={handlerChange}
              name="lastName"
            />
            <h6 className="errorCompany">{errors.lastName}</h6>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Documento de identidad"
              onChange={handlerChange}
              name="document"
            />
            <h6 className="errorCompany">{errors.document}</h6>
          </Col>
          <Col>
            <Form.Control
              placeholder="Teléfono móvil"
              onChange={handlerChange}
              name="phone"
            />
            <h6 className="errorCompany">{errors.phone}</h6>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Pais"
              onChange={handlerChange}
              name="country"
            />
            <h6 className="errorCompany">{errors.country}</h6>
          </Col>
          <Col>
            <Form.Control
              placeholder="Región/Estado/Provincia"
              onChange={handlerChange}
              name="state"
            />
            <h6 className="errorCompany">{errors.state}</h6>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Ciudad"
              onChange={handlerChange}
              name="city"
            />
            <h6 className="errorCompany">{errors.city}</h6>
          </Col>
          <Col></Col>
        </Row>
        <div className="centrado">
          <strong>DATOS DE MI COMPAÑÍA</strong>
        </div>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Nombre Empresa"
              onChange={handlerChange}
              name="company"
            />
            <h6 className="errorCompany">{errors.company}</h6>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="Dirección de la empresa"
              onChange={handlerChange}
              name="address"
            />
            <h6 className="errorCompany">{errors.address}</h6>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control
              placeholder="URL Logo o imagen"
              onChange={handlerChange}
              name="image"
            />
            <h6 className="errorCompany">{errors.image}</h6>
          </Col>
        </Row>
        <div className="centrado">
          <Button
            style={{
              margin: "20px",
              width: "auto",
              justifyContent: "center",
              backgroundColor: "#A37D34",
              border: "none",
              boxShadow: "5px 5px 10px black",
            }}
            type="submit"
            disabled={disable(errors)}
          >
            Crear Usuario
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SellerSingUp;
