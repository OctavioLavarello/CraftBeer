import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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


const User = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState<EditableUserData>({});
  const urlImage = useSelector((state: AppState) => state.urlImage);

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
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/persons/${id}`)
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
    // Initialize editedUserData with the current user data
    setEditedUserData(userData || {});
    setIsEditMode(true);
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validation({ [name]: value }, name);
    setIsEditMode(true);
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
                <Form.Group controlId="formCountry">
                  <Form.Label>Pais</Form.Label>
                   <Form.Control
                    type="text"
                    name="country"
                    value={editedUserData.country}
                   onChange={handleInputChange}
                  />
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
                  <Form.Label>Estado</Form.Label>
                   <Form.Control
                    type="text"
                    name="state"
                    value={editedUserData.state}
                   onChange={handleInputChange}
                  />
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
                <Button className={styles.buttonEdit} type="submit" disabled={disable(errors)} >Guardar cambios</Button>
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
                <Button  className={styles.buttonEdit} onClick={handleEditClick}>Editar</Button>
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