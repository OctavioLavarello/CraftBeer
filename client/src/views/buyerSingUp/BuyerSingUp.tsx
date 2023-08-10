import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { Form, Row, Col, Button } from "react-bootstrap";
import { AnyAction } from 'redux';
import axios from "axios";
import { createdUser } from "../../redux/actions/actions"; // Importa la acción creadora de usuarios

const BuyerSingUp: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    lastName: "",
    document: "",
    email: "",
    password: "",
    country:"",
    city:"",
    state:"",
    address: "",
    image: "",
    status:"",
    role:""
  });

  const dispatch = useDispatch(); // Obtiene la función dispatcher

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
      .post("https://craftbeer.up.railway.app//user", formData)
      .then((response) => {
        // Manejar la respuesta del backend si es necesario
        console.log("Usuario creado exitosamente:", response.data);
        // Llamar a la acción creadora de usuarios y enviar los datos del usuario creado
        const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
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
      <Form style={{ width: "700px", height: "auto", padding: "10px" }}>
  <Row style={{ margin: '15px' }}>
    <Col>
      Nombre:
      <Form.Control
        placeholder="Nombre"
        type="text"
        name="name"
        onChange={handleInputChange}
        value={formData.name}
      />
    </Col>
    <Col>
      Apellido:
      <Form.Control
        placeholder="Apellido"
        type="text"
        name="lastName"
        onChange={handleInputChange}
        value={formData.lastName}
      />
    </Col>
  </Row>
  <Row style={{ margin: '15px' }}>
    <Col>
      Documento:
      <Form.Control
        placeholder="Documento"
        type="number"
        name="document"
        onChange={handleInputChange}
        value={formData.document}
      />
    </Col>
    <Col>
      Contraseña:
      <Form.Control
        placeholder="Contraseña"
        type="password"
        name="password"
        onChange={handleInputChange}
        value={formData.password}
      />
    </Col>
  </Row>
  <Row style={{ margin: '15px' }}>
    <Col>
      Dirección:
      <Form.Control
        placeholder="Dirección"
        name="address"
        onChange={handleInputChange}
        value={formData.address}
      />
    </Col>
    <Col>
      Imagen:
      <Form.Control
        placeholder="URL"
        type="url"
        name="image"
        onChange={handleInputChange}
        value={formData.image}
      />
    </Col>
  </Row>
  <Row style={{ margin: '15px' }}>
    <Col>
      Email:
      <Form.Control
        placeholder="Email"
        type="email"
        name="email"
        onChange={handleInputChange}
        value={formData.email}
      />
    </Col>
  </Row>
  <Row style={{ margin: '15px' }}>
    <Col>
      País:
      <Form.Control
        placeholder="País"
        type="text"
        name="country"
        onChange={handleInputChange}
        value={formData.country}
      />
    </Col>
    <Col>
      Ciudad:
      <Form.Control
        placeholder="Ciudad"
        type="text"
        name="city"
        onChange={handleInputChange}
        value={formData.city}
      />
    </Col>
  </Row>
  <Row style={{ margin: '15px' }}>
    <Col>
      Estado:
      <Form.Control
        placeholder="Estado"
        type="text"
        name="state"
        onChange={handleInputChange}
        value={formData.state}
      />
    </Col>
    <Col>
      Estatus:
      <Form.Control
        as="select"
        name="status"
        onChange={handleInputChange}
        value={formData.status.toString()} // Convertir boolean a string
      >
        <option value="true">Disponible</option>
        <option value="false">No disponible</option>
      </Form.Control>
    </Col>
  </Row>
  <Row style={{ margin: '15px' }}>
    <Col>
      Rol:
      <Form.Control
        placeholder="Rol"
        type="text"
        name="role"
        onChange={handleInputChange}
        value={formData.role}
      />
    </Col>
  </Row>
</Form>
      <form onSubmit={handleSubmit}>
        <Button type="submit">
          Crear Usuario
        </Button>
      </form>
    </div>
  );
};

export default BuyerSingUp;