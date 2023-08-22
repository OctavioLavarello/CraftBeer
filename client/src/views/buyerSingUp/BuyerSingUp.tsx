import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { createdUser } from "../../redux/actions/actions"; // Importa la acción creadora de usuarios
import craftBeerLogo from "../../assets/img/craftBeerLogo.jpg";
import Styles from "./BuyerSingUp.module.css"
import {DragAndDrop} from "../../components/Cloudinary/Cloudinary.tsx"
import { AppState } from "../../redux/reducer";
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
interface ProvinceData {
  name: string;
}

const provincesByCountry: Record<string, ProvinceData[]> = {
  'Guyana': [
    { name: 'Barima-Waini' },
    { name: 'Cuyuni-Mazaruni' },
    { name: 'Demerara-Mahaica' },
    { name: 'East Berbice-Corentyne' },
    { name: 'Essequibo Islands-West Demerara' },
    { name: 'Mahaica-Berbice' },
    { name: 'Pomeroon-Supenaam' },
    { name: 'Potaro-Siparuni' },
    { name: 'Upper Demerara-Berbice' },
    { name: 'Upper Takutu-Upper Essequibo' },
  ],
  'Falkland Islands': [
    { name: 'Falkland Islands' },
    // Agrega más provincias si es necesario
  ],
  'Brazil': [
    { name: 'Acre' },
    { name: 'Alagoas' },
    { name: 'Amapá' },
    { name: 'Amazonas' },
    { name: 'Bahia' },
    { name: 'Ceará' },
    { name: 'Distrito Federal' },
    { name: 'Espírito Santo' },
    { name: 'Goiás' },
    { name: 'Maranhão' },
    { name: 'Mato Grosso' },
    { name: 'Mato Grosso do Sul' },
    { name: 'Minas Gerais' },
    { name: 'Pará' },
    { name: 'Paraíba' },
    { name: 'Paraná' },
    { name: 'Pernambuco' },
    { name: 'Piauí' },
    { name: 'Rio de Janeiro' },
    { name: 'Rio Grande do Norte' },
    { name: 'Rio Grande do Sul' },
    { name: 'Rondônia' },
    { name: 'Roraima' },
    { name: 'Santa Catarina' },
    { name: 'São Paulo' },
    { name: 'Sergipe' },
    { name: 'Tocantins' },
  ],
  'Argentina': [
    { name: 'Buenos Aires' },
    { name: 'Córdoba' },
    { name: 'Santa Fe' },
    { name: 'Entre Ríos' },
    { name: 'Tucumán' },
    { name: 'Mendoza' },
    { name: 'San Juan' },
    { name: 'La Rioja' },
    { name: 'Catamarca' },
    { name: 'Santiago del Estero' },
    { name: 'Salta' },
    { name: 'Jujuy' },
    { name: 'Formosa' },
    { name: 'Chaco' },
    { name: 'Corrientes' },
    { name: 'Misiones' },
    { name: 'Neuquén' },
    { name: 'Río Negro' },
    { name: 'Chubut' },
    { name: 'Santa Cruz' },
    { name: 'Tierra del Fuego' },
  ],
  'Bolivia': [
    { name: 'Pando' },
    { name: 'Beni' },
    { name: 'La Paz' },
    { name: 'Cochabamba' },
    { name: 'Santa Cruz' },
    { name: 'Oruro' },
    { name: 'Potosí' },
    { name: 'Chuquisaca' },
    { name: 'Tarija' },
],

'Paraguay': [
  { name: 'Concepción' },
  { name: 'San Pedro' },
  { name: 'Cordillera' },
  { name: 'Guairá' },
  { name: 'Caaguazú' },
  { name: 'Caazapá' },
  { name: 'Itapúa' },
  { name: 'Misiones' },
  { name: 'Paraguarí' },
  { name: 'Alto Paraná' },
  { name: 'Ñeembucú' },
  { name: 'Amambay' },
  { name: 'Canindeyú' },
  { name: 'Presidente Hayes' },
  { name: 'Boquerón' },
  { name: 'Alto Paraguay' },
  { name: 'Distrito Capital' },
],

'Uruguay': [
  { name: 'Artigas' },
  { name: 'Canelones' },
  { name: 'Cerro Largo' },
  { name: 'Colonia' },
  { name: 'Durazno' },
  { name: 'Flores' },
  { name: 'Florida' },
  { name: 'Lavalleja' },
  { name: 'Maldonado' },
  { name: 'Montevideo' },
  { name: 'Paysandú' },
  { name: 'Río Negro' },
  { name: 'Rivera' },
  { name: 'Rocha' },
  { name: 'Salto' },
  { name: 'San José' },
  { name: 'Soriano' },
  { name: 'Tacuarembó' },
  { name: 'Treinta y Tres' },
],

'French Guiana': [
  { name: 'Cayenne' },
  { name: 'Saint-Laurent-du-Maroni' },
  { name: 'Kourou' },
  { name: 'Matoury' },
  { name: 'Remire-Montjoly' },
  { name: 'Macouria' },
  { name: 'Mana' },
  { name: 'Apatou' },
  { name: 'Grand-Santi' },
  { name: 'Maripasoula' },
  { name: 'Papaïchton' },
  { name: 'Saint-Élie' },
  { name: 'Saül' },
  { name: 'Camopi' },
  { name: 'Ouanary' },
  { name: 'Roura' },
  { name: 'Régina' },
  { name: 'Rémire-Montjoly' },
  { name: 'Tonnegrande' },
  { name: 'Maripasoula' },
  { name: 'Papaïchton' },
  { name: 'Saint-Élie' },
  { name: 'Saül' },
  { name: 'Camopi' },
  { name: 'Ouanary' },
  { name: 'Roura' },
  { name: 'Régina' },
  { name: 'Rémire-Montjoly' },
  { name: 'Tonnegrande' },
],
'Chile': [
  { name: 'Santiago' },
  { name: 'Valparaíso' },
  { name: 'Maule' },
  { name: 'Biobío' },
  { name: 'Araucanía' },
  { name: 'Los Ríos' },
  { name: 'Los Lagos' },
  { name: 'Aysén' },
  { name: 'Magallanes' },
  { name: 'Antofagasta' },
  { name: 'Atacama' },
  { name: 'Coquimbo' },
  { name: 'Arica y Parinacota' },
  { name: 'Tarapacá' },
],

'Peru': [
  { name: 'Amazonas' },
  { name: 'Lima' },
  { name: 'Cusco' },
  { name: 'Arequipa' },
  { name: 'Piura' },
  { name: 'Lambayeque' },
  { name: 'La Libertad' },
  { name: 'Junín' },
  { name: 'Puno' },
  { name: 'Ancash' },
  { name: 'Callao' },
  { name: 'Ica' },
  { name: 'Loreto' },
  { name: 'Cajamarca' },
  { name: 'Ucayali' },
  { name: 'Huanuco' },
  { name: 'San Martín' },
  { name: 'Ayacucho' },
  { name: 'Tacna' },
  { name: 'Moquegua' },
  { name: 'Pasco' },
  { name: 'Madre de Dios' },
  { name: 'Tumbes' },
  { name: 'Huancavelica' },
],
'Ecuador': [
  { name: 'Azuay' },
  { name: 'Bolívar' },
  { name: 'Cañar' },
  { name: 'Carchi' },
  { name: 'Chimborazo' },
  { name: 'Cotopaxi' },
  { name: 'El Oro' },
  { name: 'Esmeraldas' },
  { name: 'Galápagos' },
  { name: 'Guayas' },
  { name: 'Imbabura' },
  { name: 'Loja' },
  { name: 'Los Ríos' },
  { name: 'Manabí' },
  { name: 'Morona Santiago' },
  { name: 'Napo' },
  { name: 'Orellana' },
  { name: 'Pastaza' },
  { name: 'Pichincha' },
  { name: 'Santa Elena' },
  { name: 'Santo Domingo de los Tsáchilas' },
  { name: 'Sucumbíos' },
  { name: 'Tungurahua' },
  { name: 'Zamora-Chinchipe' },
],
'Surinam': [
  { name: 'Brokopondo' },
  { name: 'Commewijne' },
  { name: 'Coronie' },
  { name: 'Marowijne' },
  { name: 'Nickerie' },
  { name: 'Para' },
  { name: 'Paramaribo' },
  { name: 'Saramacca' },
  { name: 'Sipaliwini' },
  { name: 'Wanica' },
],
'Colombia': [
  { name: 'Amazonas' },
  { name: 'Antioquia' },
  { name: 'Arauca' },
  { name: 'Atlántico' },
  { name: 'Bogotá' },
  { name: 'Bolívar' },
  { name: 'Boyacá' },
  { name: 'Caldas' },
  { name: 'Caquetá' },
  { name: 'Casanare' },
  { name: 'Cauca' },
  { name: 'Cesar' },
  { name: 'Chocó' },
  { name: 'Córdoba' },
  { name: 'Cundinamarca' },
  { name: 'Guainía' },
  { name: 'Guaviare' },
  { name: 'Huila' },
  { name: 'La Guajira' },
  { name: 'Magdalena' },
  { name: 'Meta' },
  { name: 'Nariño' },
  { name: 'Norte de Santander' },
  { name: 'Putumayo' },
  { name: 'Quindío' },
  { name: 'Risaralda' },
  { name: 'San Andrés y Providencia' },
  { name: 'Santander' },
  { name: 'Sucre' },
  { name: 'Tolima' },
  { name: 'Valle del Cauca' },
  { name: 'Vaupés' },
  { name: 'Vichada' },
],
'Venezuela': [
  { name: 'Amazonas' },
  { name: 'Anzoátegui' },
  { name: 'Apure' },
  { name: 'Aragua' },
  { name: 'Barinas' },
  { name: 'Bolívar' },
  { name: 'Carabobo' },
  { name: 'Cojedes' },
  { name: 'Delta Amacuro' },
  { name: 'Falcón' },
  { name: 'Guárico' },
  { name: 'Lara' },
  { name: 'Mérida' },
  { name: 'Miranda' },
  { name: 'Monagas' },
  { name: 'Nueva Esparta' },
  { name: 'Portuguesa' },
  { name: 'Sucre' },
  { name: 'Táchira' },
  { name: 'Trujillo' },
  { name: 'Vargas' },
  { name: 'Yaracuy' },
  { name: 'Zulia' },
  { name: 'Distrito Capital' },
],
};

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
    // image: "Se requiere una imagen",
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
    // if(name === "image"){
    //   if (input.image !== "") setErrors({ ...errors, image: "" });
    //   else setErrors({ ...errors, image: "Información requerida" });
    // }

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
    // console.log(formData);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(formData);
      dispatch(createdUser(formData));
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
      // });
    };

// console.log(formData);
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
      {/* Imagen:
      <Form.Control
        placeholder="URL"
        type="url"
        name="image"
        onChange={handleInputChange}
       
      />
      <h6 className={Styles.mensajes}>{errors.image}</h6> */}
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
  {provincesByCountry[formData.country]?.map((province, index) => (
    <option key={index} value={province.name}>
      {province.name}
    </option>
  ))}
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