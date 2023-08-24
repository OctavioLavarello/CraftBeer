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
import { toast } from "react-hot-toast";

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
        `https://craftbeer.up.railway.app/user`,
        editedUserData
      );
      toast.success("User update");
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
    <Container style={{ width: "50%", marginTop: "2%", marginBottom: "2%" }}>
      <Row className={styles.Columna}>
        <Col>
          <Card className={styles.box}>
            <Card.Body>
              <Card.Title className={styles.Title}>
                Modify personal data of {userData?.name}
              </Card.Title>
              <Card.Text>Name: {userData?.name}</Card.Text>
              {isEditMode ? (
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={editedUserData.name}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formImage">
                        <Form.Label>Image</Form.Label>
                        <DragAndDrop />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={editedUserData.lastName}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formDocument">
                      <Form.Label>Document ID</Form.Label>
                      <Form.Control
                        type="number"
                        name="document"
                        value={editedUserData.document}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Group controlId="formCountry">
                    <Form.Control
                      as="select"
                      name="country"
                      value={editedUserData.country}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your country...</option>
                      {countryNames.map((countryName, index) => (
                        <option key={index} value={countryName}>
                          {countryName}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={editedUserData.city}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      name="state"
                      value={editedUserData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your province...</option>
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
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={editedUserData.address}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <div style={{ textAlign: "center", marginTop: "2%" }}>
                    <Button
                      className={styles.buttonEdit}
                      type="submit"
                      disabled={disable()}
                    >
                      Save change
                    </Button>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "1%" }}>
                    <Button
                      onClick={() => navigate(-1)}
                      className={styles.buttonEdit}
                    >
                      Back
                    </Button>
                  </div>
                </Form>
              ) : (
                <>
                  <Card.Img className={styles.image} src={userData?.image} />
                  <Card.Text>Last Name: {userData?.lastName}</Card.Text>
                  <Card.Text>Email: {userData?.email}</Card.Text>
                  <Card.Text>Document ID: {userData?.document}</Card.Text>
                  <Card.Text>Country: {userData?.country}</Card.Text>
                  <Card.Text>City: {userData?.city}</Card.Text>
                  <Card.Text>State: {userData?.state}</Card.Text>
                  <Card.Text>Street: {userData?.address}</Card.Text>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      className={styles.buttonEdit}
                      onClick={handleEditClick}
                    >
                      Edit
                    </Button>
                  </div>
                  <div style={{ textAlign: "center", marginTop: "1%" }}>
                    <Button
                      onClick={() => navigate(-1)}
                      className={styles.buttonEdit}
                    >
                      Back
                    </Button>
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

export default AdminUserModify;
