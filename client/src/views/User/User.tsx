import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DragAndDrop } from "../../components/Cloudinary/Cloudinary.tsx";
import { AppState } from "../../redux/reducer";
import styles from "./User.module.css";

interface UserData {
  id: string;
  name: string;
  lastName: string;
  document: string;
  email: string;
  password: string;
  address: string;
  image: string;
  country: string;
  city: string;
  state: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  ShoppingHistories: any[]; 
}
interface EditableUserData {
  name?: string;
  lastName?: string;
  document?: string;
  email?: string;
  password?: string;
  address?: string; 
  image?: string;
  country?: string;
  city?: string;
  state?: string;
}
interface Errors {
  name: string;
  lastName: string;
  document: string;
  country: string;
  city: string;
  state: string;
  address: string;
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


const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<UserData>();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState<EditableUserData>({});
  const urlImage = useSelector((state: AppState) => state.urlImage);
  const [countryNames, setCountryNames] = useState<string[]>([]);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name: "Se requiere nombre",
    lastName: "Se requiere apellido",
    document: "Se requiere documento",
    country:"Se requiere pais",
    city:"Se requiere ciudad",
    state:"Se requiere estado",
    address: "Se requiere direccion",
    // image: "Se requiere una imagen",
  })

  const validation = (input: any, name: keyof Errors) => {
    const requiredFields: (keyof Errors)[] = ["name", "lastName", "document", "country", "city", "state", "address"];
    if (requiredFields.includes(name)) {
      if (input[name] !== "") {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "Información requerida" }));
      }
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://craftbeer.up.railway.app/persons/${id}`)
        setUserData(response.data)
      } catch (error) {
        console.log(error);
        console.error('Error fetching user', error);
      }
    }
    fetchUsers()
  }, [id]);

   useEffect(() => {
    if (urlImage) {
      setEditedUserData((prevData) => ({
        ...prevData,
        image: urlImage,
      }));
    }
  }, [urlImage]);

  const handleEditClick = () => {
    setEditedUserData({ ...userData }); 
    setIsEditMode(true);
console.log(userData)
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validation({ [name]: value }, name as keyof Errors);
    setIsEditMode(true);
  };


  const disable = (): boolean => {
    return Object.values(errors).some((error) => error !== "");
  };
  
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3001/user`, editedUserData);
      console.log(response.data); // Log the response
      // Update userData to show the updated data
      setUserData(editedUserData as UserData);
      setIsEditMode(false); // Exit edit mode
    } catch (error) {
      console.error('Error updating user', error);
    }
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
    <Container>
    <Row className={styles.Columna}>
      <Col >
        <Card className={styles.box}>
          <Card.Body>
            <Card.Title className={styles.Title}>MIS DATOS PERSONALES!!!</Card.Title>
            <Card.Text>Nombre: {userData?.name}</Card.Text>
            {isEditMode ? (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={editedUserData.name}
                    onChange={handleInputChange}
                  />
                   <h6 className={styles.mensajes}>{errors.name}</h6>
                </Form.Group>
                   <Form.Group controlId="formImage">
                    <Form.Label>Imagen</Form.Label>
                    <DragAndDrop />
                    <Form.Control 
                      type="text"
                      name="image"
                      value={editedUserData.image}
                      onChange={handleInputChange}
                    />
                  <Form.Group controlId="formLastName">
                  <Form.Label>Apellido</Form.Label>
                   <Form.Control
                    type="text"
                    name="lastName"
                    value={editedUserData.lastName}
                   onChange={handleInputChange}
                  />
                   <h6 className={styles.mensajes}>{errors.lastName}</h6>
                  </Form.Group>
                  <Form.Group controlId="formDocument">
                  <Form.Label>Documento</Form.Label>
                   <Form.Control
                    type="number"
                    name="document"
                    value={editedUserData.document}
                   onChange={handleInputChange}
                  />
                   <h6 className={styles.mensajes}>{errors.document}</h6>
                  </Form.Group>
                </Form.Group>
                <Form.Label>Pais</Form.Label>
                <Form.Group controlId="formCountry">
                  <Form.Control
            as="select"
            name="country"
            value={editedUserData.country}
            
            onChange={handleInputChange}
          >
            <option value="">Selecciona un país...</option>
            {countryNames.map((countryName, index) => (
              <option key={index} value={countryName}>
                {countryName}
              </option>
            ))}
          </Form.Control>
                   <h6 className={styles.mensajes}>{errors.country}</h6>
                </Form.Group>
                <Form.Group controlId="formCity">
                  <Form.Label>Ciudad</Form.Label>
                   <Form.Control
                    type="text"
                    name="city"
                    value={editedUserData.city}
                   onChange={handleInputChange}
                  />
                   <h6 className={styles.mensajes}>{errors.city}</h6>
                </Form.Group>
                <Form.Group controlId="formState">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control
  as="select"
  name="state"
  value={editedUserData.state}
  onChange={handleInputChange}
>
  <option value="">Selecciona una provincia...</option>
  {editedUserData.country && provincesByCountry[editedUserData.country]?.map((province: ProvinceData, index: number) => (
  <option key={index} value={province.name}>
    {province.name}
  </option>
))}
</Form.Control>
                   <h6 className={styles.mensajes}>{errors.state}</h6>
                </Form.Group>
                <Form.Group controlId="formAddress">
                  <Form.Label>Calle</Form.Label>
                   <Form.Control
                    type="text"
                    name="address"
                    value={editedUserData.address}
                   onChange={handleInputChange}
                  />
                  <h6 className={styles.mensajes}>{errors.address}</h6>
                </Form.Group>
                <Button className={styles.buttonEdit} type="submit" disabled={disable()} >Guardar cambios</Button>
              </Form>
              
            ) : (
              <>
                <Card.Img className={styles.image} src={userData?.image} />
                <Card.Text>Apellido: {userData?.lastName}</Card.Text>
                <Card.Text>Email: {userData?.email}</Card.Text>
                <Card.Text>Documento: {userData?.document}</Card.Text>
                <Card.Text>País: {userData?.country}</Card.Text>
                <Card.Text>Ciudad: {userData?.city}</Card.Text>
                <Card.Text>Estado: {userData?.state}</Card.Text>
                <Card.Text>Calle: {userData?.address}</Card.Text>
                <div className={styles.buttonContainer}>
                 <Button className={styles.buttonEdit} onClick={handleEditClick}>Editar</Button>
                 <Button onClick={() => navigate(-1)} className={styles.buttonback}>Volver</Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
};

export default User;