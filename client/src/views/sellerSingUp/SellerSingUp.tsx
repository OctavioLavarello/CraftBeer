///IMPORTS
import { useState } from "react";
import { AnyAction, Dispatch } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../sellerSingUp/selllerSingUp.css";
import { useDispatch } from "react-redux";
import {createdCompany} from "../../redux/actions/actions";

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

  const handlerChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    // validation(
    //   {
    //     ...input,
    //     [event.target.name]: event.target.value,
    //   },
    //   event.target.name
    // );
  };

  // const disable = (errors:{ [key: string]: string }): boolean => {
  //   let disabled = true;
  //   for (let error in errors) {
  //     if (errors[error] === "") disabled = false;
  //     else {
  //       disabled = true;
  //       break;
  //     }
  //   }
  //   return disabled;
  // };

  return (
    <div className="bodyFormSeller">
      <Form
        style={{
          height: "auto",
          width: "60%",
          backgroundColor: "#A1941D",
          borderRadius: "50px",
          marginTop:"3%",
          marginLeft:"20%",
          marginBottom:"3%"
        }}
        onSubmit={handlerSubmit}
        >
        <Row
          style={{
            margin: "15px",
          }}
          >
            <h5 style={{marginTop:"1%"}}>
              Crea tu usuario de vendedor. Propociona la siguiente información: 
            </h5>
          <a ><strong>USUARIO</strong></a>
          <Col
            style={{
              marginTop: "30px",
            }}
          >
            <Form.Control placeholder="Email" onChange={handlerChange}/>
          </Col>
          <Col
            style={{
              marginTop: "30px",
            }}
          >
            <Form.Control placeholder="Password" onChange={handlerChange}/>
          </Col>
        </Row>
        <a><strong>DATOS PERSONALES</strong></a>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Nombres" onChange={handlerChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Apellidos" onChange={handlerChange}/>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
          <Form.Control placeholder="Documento de identidad" onChange={handlerChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Teléfono móvil" onChange={handlerChange} />
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Pais" onChange={handlerChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Región/Estado/Provincia" onChange={handlerChange}/>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Ciudad" onChange={handlerChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Código postal" onChange={handlerChange}/>
          </Col>
        </Row>
        <a><strong>DATOS DE MI COMPAÑÍA</strong></a>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Nombre Empresa" onChange={handlerChange}/>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="Dirección de la empresa" onChange={handlerChange}/>
          </Col>
        </Row>
        <Row
          style={{
            margin: "15px",
          }}
        >
          <Col>
            <Form.Control placeholder="URL Logo o imagen" onChange={handlerChange}/>
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
          type="submit"
          //disabled={}
        >
          Crear Usuario
        </Button>
      </Form>
    </div>
  );
};

export default SellerSingUp;
