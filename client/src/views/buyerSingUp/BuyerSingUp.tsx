import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { createdUser } from "../../redux/actions/actions"; // Importa la acción creadora de usuarios
import craftBeerLogo from "../../assets/img/craftBeerLogo.jpg";
import Styles from "./BuyerSingUp.module.css"
interface UserData {
  name: string;
  lastName: string;
  document: number;
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
    name: "",
    lastName: "",
    document: 0,
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
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(input.password)) {
          setErrors({ ...errors, password: "" });
        } else {
          setErrors({ ...errors, password: "La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener más de 8 caracteres." });
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

    }
  
  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    //  console.log(formData)


  console.log(formData)
  dispatch(createdUser(formData))
  // setFormData({
  //   name: "",
  //   lastName: "",
  //   document: 0,
  //   email: "",
  //   password: "",
  //   country: "",
  //   city: "",
  //   state: "",
  //   address: "",
  //   image: "",
  //   status: "",
  //   role: ""
  // });
};

// console.log(formData);

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
  // console.log(formData);



  return (
    <div className={Styles.container}>
    
      <div className={Styles.formBox}>
      <Form  onSubmit={handleSubmit} style={{ width: "700px", height: "auto", padding: "10px" }}>
  <Row style={{ margin: '15px' }}>
    <Col>
      Nombre:
      <Form.Control
        placeholder="Nombre"
        type="text"
        name="name"
        onChange={handleInputChange}
       
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
    
      />
      <h6 className={Styles.mensajes}>{errors.state}</h6>
    </Col>
    <Col>

    </Col>
  </Row>
      <Button type="submit"
      disabled={disable(errors)}>
        
        Crear Usuario
      </Button>
   
 
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