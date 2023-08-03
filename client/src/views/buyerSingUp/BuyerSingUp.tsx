import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
// STYLES
//....
interface FormData {
  id: string;
  name: string;
  lastName: string;
  document: string;
  email: string;
  password: string;
  address: string;
  image: string;
}
// BUYER SING UP
const BuyerSingUp: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    id: "",
    name: "",
    lastName: "",
    document: "",
    email: "",
    password: "",
    address: "",
    image: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Realizar la solicitud POST al backend para guardar los datos en la base de datos
    axios
      .post("URL_DEL_BACKEND", formData)
      .then((response) => {
        // Manejar la respuesta del backend si es necesario
        console.log("Usuario creado exitosamente:", response.data);
      })
      .catch((error) => {
        // Manejar el error si ocurre alguno durante la solicitud
        console.error("Error al crear usuario:", error);
      });
  };
  const areAllFieldsFilled = () => {
    for (const field in formData) {
      if (formData[field] === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      <h2>BUYER SING UP</h2>
      <Form style={{width:'700px', height:'auto', padding:'10px'}}>
      <Row style={{margin:'15px'}}>
          <Col>
          Nombre:
          <Form.Control placeholder="Nombre" type="text"  onChange={handleInputChange}/>

          </Col>
          <Col>
          Apellido:
          <Form.Control placeholder="Apellido" type="text"  onChange={handleInputChange}/>
          
          </Col>
        </Row>
        <Row style={{margin:'15px'}}>
          <Col>
          Documento:
          <Form.Control placeholder="Documento" type="number" onChange={handleInputChange}/>

          </Col>
          <Col>
          Contraseña:
          <Form.Control placeholder="Contraseña" type="password" onChange={handleInputChange}/>
          
          </Col>
        </Row>
        
        
        <Row style={{margin:'15px'}}>
          <Col>
          Direccion:
          <Form.Control placeholder="Direccion" onChange={handleInputChange}/>
          </Col>
          <Col>
          Imagen:
          <Form.Control placeholder="URL" type='url' onChange={handleInputChange} />
          </Col>
          
        </Row>
        <Row style={{margin:'15px'}}>
          <Col>
          Email:
          <Form.Control placeholder="Email" type="email" onChange={handleInputChange}/>

          </Col>
         
        </Row>
        
      </Form>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Crear Usuario
        </button>

      </form>
    </div>
  );
};

export default BuyerSingUp;