import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { createdUser } from "../../redux/actions/actions"; // Importa la acción creadora de usuarios
import craftBeerLogo from "../../assets/img/craftBeerLogo.jpg";
import Styles from "./BuyerSingUp.module.css"
import {DragAndDrop} from "../../components/Cloudinary/Cloudinary.tsx"
import { AppState } from "../../redux/reducer";
import { provincesByCountry, ProvinceData } from '../../components/provincesData/provincesData.ts';
interface UserData {
  name: string;
  id?: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  country: string;
  city: string;
  state: string;
  address: string;
  image: string;
}

interface CountryData {
  name: {
    common: string;
  };
}

const BuyerSingUp: React.FC = () => {
  const dispatch = useDispatch<any>();
  const urlImage = useSelector((state: AppState)=> state.urlImage)
  const [countryNames, setCountryNames] = useState<string[]>([]);

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
   
  });

  
  useEffect(() => {
    setFormData((prevInput) => ({ ...prevInput, image: urlImage }));
  }, [urlImage]);


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
  })

  const validation = (input: any, name: any) =>{
    if (name === "name") {
      if (input.name !== "") {
        if (/^[a-zA-Z]+$/.test(input.name)) {  
          setErrors({ ...errors, name: "" });
        } else {
          setErrors({ ...errors, name: "Solo se permiten letras" });
        }
      } else {
        setErrors({ ...errors, name: "Información requerida" });
      }
    }
    
    if(name === "lastName"){
      if (input.lastName !== "") {
        if (/^[a-zA-Z]+$/.test(input.lastName)) {  
          setErrors({ ...errors, lastName: "" });
        } else {
          setErrors({ ...errors, lastName: "Solo se permiten letras" });
        }
      } else {
        setErrors({ ...errors, lastName: "Información requerida" });
      }
    }
    if(name === "document"){
      if (input.document !== "") setErrors({ ...errors, document: "" });
      else setErrors({ ...errors, document: "Información requerida" });
    }
    if (name === "email") {
      if (input.email !== "") {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email)) {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "Correo electrónico inválido" }));
        }
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "Información requerida" }));
      }
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
      if (input.city !== "") {
        if (/^[a-zA-Z]+$/.test(input.city)) {  
          setErrors({ ...errors, city: "" });
        } else {
          setErrors({ ...errors, city: "Solo se permiten letras" });
        }
      } else {
        setErrors({ ...errors, city: "Información requerida" });
      }
    }
    if(name === "state"){
      if (input.state !== "") setErrors({ ...errors, state: "" });
      else setErrors({ ...errors, state: "Información requerida" });
    }
    if(name === "address"){
      if (input.address !== "") setErrors({ ...errors, address: "" });
      else setErrors({ ...errors, address: "Información requerida" });
    }
  
    }
  
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      validation({ [name]: value }, name as keyof UserData);
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


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(createdUser(formData));
    };


const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/region/South%20America');
    const data: CountryData[] = await response.json();
    const countryNames = data.map(country => country.name.common);
    setCountryNames(countryNames);
  } catch (error) {
    console.error('Error fetching country names:', error);
  }
}; 

useEffect(() => {
  fetchCountries();
}, []);


  return (
    <div className={Styles.container}>
    
      <div className={Styles.formBox}>
      <Form  onSubmit={handleSubmit} style={{ width: "700px", height: "auto", padding: "10px" }}>
  <Row style={{ margin: '15px' }}>
    <Col >
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
    <DragAndDrop/>
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
            as="select"
            name="country"
            value={formData.country}
            
            onChange={handleInputChange}
          >
            <option value="">Selecciona un país...</option>
            {countryNames.map((countryName, index) => (
              <option key={index} value={countryName}>
                {countryName}
              </option>
            ))}
          </Form.Control>
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
      Provincia:
      <Form.Control
        as="select"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        >
        <option value="">Selecciona una provincia...</option>
        {formData.country &&
        provincesByCountry[formData.country]?.map(
        (province: ProvinceData, index: number) => (
          <option key={index} value={province.name}>
            {province.name}
          </option>
        )
          )}
      </Form.Control>
      <h6 className={Styles.mensajes}>{errors.state}</h6>
    </Col>
    <Col>

    </Col>
  </Row>
  <div style={{textAlign:"center"}}>
      <Button type="submit"
      disabled={disable(errors)}>
        Crear Usuario
      </Button>
  </div>
    </Form>

    </div>
    <Row className={Styles.imageContainer}>
        <Col  className={Styles.imageCol}>
          <img className={Styles.image} src={craftBeerLogo} alt="" />
        </Col>
    </Row>
      

    </div>
  );
};

export default BuyerSingUp;