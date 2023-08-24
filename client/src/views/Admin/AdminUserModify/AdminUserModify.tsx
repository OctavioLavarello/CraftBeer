import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DragAndDrop } from "../../../components/Cloudinary/Cloudinary.tsx";
import styles from "./AdminUserModify.module.css";
import { AppState } from "../../../redux/reducer";
import {
  provincesByCountry,
  ProvinceData,
} from "../../../components/provincesData/provincesData.ts";

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

interface CountryData {
  name: {
    common: string;
  };
}

const AdminUserModify = () => {
  const id = useSelector((state: AppState) => state.idBuyer);
  console.log("esot es elID", id);

  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState<EditableUserData>({});
  const [countryNames, setCountryNames] = useState<string[]>([]);
  const urlImage = useSelector((state: AppState) => state.urlImage);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/persons/${id}`);

        setUserData(response.data);
      } catch (error) {
        console.log(error);
        console.error("Error fetching user", error);
      }
    };
    fetchUsers();
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
    console.log(userData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Verificar si el campo es "name", "lastName" o "city" antes de aplicar el regex
    if (
      (name === "name" || name === "lastName" || name === "city") &&
      (/^[A-Za-z]*$/.test(value) || value === "")
    ) {
      // Permitir cadena vacía
      setEditedUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setIsEditMode(true);
    } else if (name !== "name" && name !== "lastName" && name !== "city") {
      // Si no es ninguno de los campos anteriores, actualizar directamente
      setEditedUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setIsEditMode(true);
    }
  };

  const disable = (): boolean => {
    return (
      !editedUserData.name ||
      !editedUserData.lastName ||
      !editedUserData.document ||
      !editedUserData.country ||
      !editedUserData.city ||
      !editedUserData.state ||
      !editedUserData.address
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3001/user`,
        editedUserData
      );
      console.log(response.data); // Log the response
      // Update userData to show the updated data
      setUserData(editedUserData as UserData);
      setIsEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/region/South%20America"
      );
      const data: CountryData[] = await response.json();
      const countryNames = data.map((country) => country.name.common);
      setCountryNames(countryNames);
    } catch (error) {
      console.error("Error fetching country names:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (urlImage) {
      setEditedUserData((prevData) => ({
        ...prevData,
        image: urlImage,
      }));
    }
  }, [urlImage]);

  return (
    <Container>
      <Row className={styles.Columna}>
        <Col>
          <Card className={styles.box}>
            <Card.Body>
              <Card.Title className={styles.Title}>
                Modificar datos personales de {userData?.name}
              </Card.Title>
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
                    </Form.Group>
                    <Form.Group controlId="formDocument">
                      <Form.Label>Documento</Form.Label>
                      <Form.Control
                        type="number"
                        name="document"
                        value={editedUserData.document}
                        onChange={handleInputChange}
                      />
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
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={editedUserData.city}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formState">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      value={editedUserData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Selecciona una provincia...</option>
                      {editedUserData.country &&
                        provincesByCountry[editedUserData.country]?.map(
                          (province: ProvinceData, index: number) => (
                            <option key={index} value={province.name}>
                              {province.name}
                            </option>
                          )
                        )}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formAddress">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={editedUserData.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Button
                    className={styles.buttonEdit}
                    type="submit"
                    disabled={disable()}
                  >
                    Guardar cambios
                  </Button>
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
                  <Button
                    className={styles.buttonEdit}
                    onClick={handleEditClick}
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => navigate(-1)}
                    className={styles.buttonback}
                  >
                    Volver
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserModify;
