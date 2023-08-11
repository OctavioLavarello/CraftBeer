import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { Form, Row, Col, Button } from "react-bootstrap";
import { AnyAction } from 'redux';
import axios from "axios";
import { createdUser } from "../../redux/actions/actions"; // Importa la acción creadora de usuarios
import craftBeerLogo from "../../assets/img/craftBeerLogo.jpg";
import Styles from "./BuyerSingUp.module.css"
interface UserData {
  id: string;
  name: string;
  lastName: string;
  document: string;
  email: string;
  password: string;
  country: string;
  city: string;
  state: string;
  address: string;
  image: string;
  status: string;
  role: string;
}
const BuyerSingUp: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [formData, setFormData] = useState<UserData>({ 
    id: "", 
    name: "",
    lastName: "",
    document: "",
    email: "",
    password: "",
    country: "",
    city: "",
    state: "",
    address: "",
    image: "",
    status: "",
    role: ""
  });
  const [errors, setErrors] = useState({
    name: "Se requiere nombre",
    lastName: "Se requiere apellido",
    document: "Se requiere documento",
    email: "Se requiere un email",
    password: "Se requiere contraseña",
    country:"Se requiere pais",
    city:"Se requiere ciudad",
    state:"Se requiere estado",
    address: "Se requiere direccion",
    image: "Se requiere una imagen",
    status:"Se requier un estatus",
    role:"Se requiere un rol"
  })

  const validation = (input: any, name: any) =>{
    if(name==="name"){
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Información requerida" });
    }
    if(name === "lastName"){
      if (input.lastName !== "") setErrors({ ...errors, lastName: "" });
      else setErrors({ ...errors, lastName: "Información requerida" });
    }
    if(name === "document"){
      if (input.document !== "") setErrors({ ...errors, document: "" });
      else setErrors({ ...errors, document: "Información requerida" });
    }
    if(name === "email"){
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
    if(name === "country"){
      if (input.country !== "") setErrors({ ...errors, country: "" });
      else setErrors({ ...errors, country: "Información requerida" });
    }
    if(name === "city"){
      if (input.city !== "") setErrors({ ...errors, city: "" });
      else setErrors({ ...errors, city: "Información requerida" });
    }
    if(name === "state"){
      if (input.state !== "") setErrors({ ...errors, state: "" });
      else setErrors({ ...errors, state: "Información requerida" });
    }
    if(name === "address"){
      if (input.address !== "") setErrors({ ...errors, address: "" });
      else setErrors({ ...errors, address: "Información requerida" });
    }
    if(name === "image"){
      if (input.image !== "") setErrors({ ...errors, image: "" });
      else setErrors({ ...errors, image: "Información requerida" });
    }
    if(name === "status"){
      if (input.status !== "") setErrors({ ...errors, status: "" });
      else setErrors({ ...errors, status: "Información requerida" });
    }
    if(name === "role"){
      if (input.role !== "") setErrors({ ...errors, role: "" });
      else setErrors({ ...errors, role: "Información requerida" });
    }
    }
  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Realizar la solicitud POST al backend para guardar los datos en la base de datos
     console.log(formData)
     dispatch(createdUser(formData))
     setFormData({
      ...formData,
    });
    };
 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any) => {
    const { name, value } = event.target;
    setFormData({...formData,[name]: value,});
    validation({...formData, [name]: value}, name);
  };
  const disable = (errors:{ [key: string]: string }): boolean => {
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
    <div className={Styles.container}>
    
      <div className={Styles.formBox}>
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
       <h6 className={Styles.mensajes}>{errors.name}</h6>
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
      <h6 className={Styles.mensajes}>{errors.lastName}</h6>
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
      <h6 className={Styles.mensajes}>{errors.document}</h6>
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
      <h6 className={Styles.mensajes}>{errors.password}</h6>
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
      <h6 className={Styles.mensajes}>{errors.address}</h6>
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
      <h6 className={Styles.mensajes}>{errors.image}</h6>
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
      <h6 className={Styles.mensajes}>{errors.email}</h6>
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
      <h6 className={Styles.mensajes}>{errors.country}</h6>
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
      <h6 className={Styles.mensajes}>{errors.city}</h6>
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
      <h6 className={Styles.mensajes}>{errors.state}</h6>
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
      <h6 className={Styles.mensajes}>{errors.status}</h6>
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
      <h6 className={Styles.mensajes}>{errors.role}</h6>
    </Col>
  </Row>
  
 
    <form onSubmit={handleSubmit}>
      <Button type="submit"
      disabled={disable(errors)}>
        
        Crear Usuario
      </Button>
    </form>
 
    </Form>

    </div>
    <Row className={Styles.imageContainer}>
        <Col >
          <img className={Styles.image} src={craftBeerLogo} alt="" />
        </Col>
    </Row>
      

    </div>
  );
};

export default BuyerSingUp;