/// IMPORTS
import React, { useState, useEffect } from "react";
import companyPutValidation from "../../Company/CompanyPutValidation.ts";
import axios from "axios";
import toast from "react-hot-toast";
import {
  provincesByCountry,
  ProvinceData,
} from "../../../components/provincesData/provincesData.ts";
// COMPONENTS
//import MySoldProducts from "../../components/MySoldProducts/MySoldProducts";
// STYLES
import styles from "../AdminCompanyModify/AdminCompanyModify.module.css";
import { Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/reducer.ts";
import { DragAndDrop } from "../../../components/Cloudinary/Cloudinary.tsx";
import { Link } from "react-router-dom";

// COMPANY DETAIL
export interface company {
  name: string;
  lastName: string;
  email: string;
  document: number;
  phone: number;
  country: string;
  state: string;
  city: string;
  address: string;
  company: string;
  id: string;
  image: string;
}
interface CountryData {
  name: {
    common: string;
  };
}
const AdminCompanyModify: React.FC = () => {
  // LOCAL STORAGE
  // const hasNavigatedLocalStorage: any = localStorage.getItem("user")
  // const { user } = JSON.parse(hasNavigatedLocalStorage)
  const id = useSelector((state: AppState) => state.idSeller);
  const urlImage = useSelector((state: AppState) => state.urlImage);
  const [countryNames, setCountryNames] = useState<string[]>([]);
  // LOCAL STATE
  const [companyData, setCompanyData] = useState<company>({
    name: "",
    lastName: "",
    email: "",
    document: 0,
    phone: 0,
    country: "",
    state: "",
    city: "",
    address: "",
    company: "",
    id: "",
    image: urlImage,
  });
  console.log(companyData.image);

  const [errors, setErrors] = useState<company>({
    name: "",
    lastName: "",
    email: "",
    document: 0,
    phone: 0,
    country: "",
    city: "",
    state: "",
    company: "",
    address: "",
    id: "",
    image: "",
  });

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/admin/${id}`);
      setCompanyData(response.data);
    };
    solicitud();
  }, [id]);

  useEffect(() => {
    setCompanyData((prevInput) => ({ ...prevInput, image: urlImage }));
  }, [urlImage]);

  console.log(companyData);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // HANDLERS
  const handlerIsClicked = () => {
    setIsClicked(!isClicked);
  };
  const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCompanyData((prevCompanyData) => ({
      ...prevCompanyData,
      [name]: value,
    }));
    companyPutValidation(companyData, setErrors);
  };
  // const handlerLocalStorageRefresh = () => {
  //   const userString: any = localStorage.getItem("user");
  //   const user = JSON.parse(userString);
  //   user.name = companyData.name;
  //   user.lastName = companyData.lastName;
  //   user.email = companyData.email;
  //   user.document = companyData.document;
  //   user.phone = companyData.phone;
  //   user.country = companyData.country;
  //   user.state = companyData.state;
  //   user.city = companyData.city;
  //   user.company = companyData.company;
  //   user.address = companyData.address;
  //   user.image = companyData.image;
  //   localStorage.setItem("user", JSON.stringify(user));
  // };
  const handlerOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      await axios.put("/company", companyData);
      //await handlerLocalStorageRefresh();
      toast.success("La información se actualizó correctamente");
      setIsClicked(!isClicked);
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("an error occurred while upload company data");
      }
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

  return (
    <div className={styles.all}>
      <div
        className={`${
          errors.name ||
          errors.lastName ||
          errors.email ||
          errors.country ||
          errors.state ||
          errors.city ||
          errors.company ||
          errors.address
            ? styles.formMasterError
            : styles.formMaster
        }`}
      >
        {!isClicked ? (
          <div className={styles.formDiv}>
            <Form className={styles.form}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.name}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.lastName}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      readOnly
                      type="email"
                      value={companyData.email}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Documento</Form.Label>
                    <Form.Control
                      readOnly
                      type="number"
                      value={companyData.document}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Numero de telefono</Form.Label>
                    <Form.Control
                      readOnly
                      type="number"
                      value={companyData.phone}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Pais</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.country}
                      onChange={handlerOnChange}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.state}
                      onChange={handlerOnChange}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.city}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Compañía</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.company}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={companyData.address}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Profile Image</Form.Label>
              </Form.Group>
              <img
                src={companyData.image}
                alt={companyData.image}
                className={styles.inputImg}
              />
            </Form>
            <div style={{ textAlign: "center" }}>
              <button onClick={handlerIsClicked} className={styles.edit}>
                Editar
              </button>
            </div>
            <div style={{ textAlign: "center", marginBottom: "2%" }}>
              <Link to="/admin">
                <button
                  style={{
                    backgroundColor: "gray",
                    borderRadius: "10px",
                    height: "100%",
                    width: "30%",
                  }}
                >
                  Volver al panel
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <Form className={styles.formPut} onSubmit={handlerOnSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={`${
                        errors.name ? styles.inputError : styles.input
                      }`}
                      required
                      type="text"
                      name="name"
                      value={companyData.name}
                      placeholder="change your name?"
                      onChange={handlerOnChange}
                    />
                    {errors.name && (
                      <p className={styles.validationMessage}>{errors.name}</p>
                    )}
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={`${
                        errors.lastName ? styles.inputError : styles.input
                      }`}
                      required
                      type="text"
                      name="lastName"
                      value={companyData.lastName}
                      placeholder="change your last name?"
                      onChange={handlerOnChange}
                    />
                    {errors.lastName && (
                      <p className={styles.validationMessage}>
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={`${
                        errors.email ? styles.inputError : styles.input
                      }`}
                      required
                      type="email"
                      name="email"
                      value={companyData.email}
                      placeholder="change your email?"
                      onChange={handlerOnChange}
                    />
                    {errors.email && (
                      <p className={styles.validationMessage}>{errors.email}</p>
                    )}
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Documento</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={styles.input}
                      required
                      type="number"
                      name="document"
                      value={companyData.document}
                      placeholder="change your document?"
                      onChange={handlerOnChange}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Numero de telefono</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={styles.input}
                      required
                      type="number"
                      name="phone"
                      value={companyData.phone}
                      placeholder="change your phone number?"
                      onChange={handlerOnChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Pais</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={styles.input}
                      as="select"
                      name="country"
                      value={companyData.country}
                      onChange={handlerOnChange}
                    >
                      <option value="">Selecciona un país...</option>
                      {countryNames.map((countryName, index) => (
                        <option key={index} value={countryName}>
                          {countryName}
                        </option>
                      ))}
                    </Form.Control>
                    {errors.country && (
                      <p className={styles.validationMessage}>
                        {errors.country}
                      </p>
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Provincia</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={styles.input}
                      as="select"
                      name="state"
                      value={companyData.state}
                      onChange={handlerOnChange}
                    >
                      <option value="">Selecciona una provincia...</option>
                      {companyData.country &&
                        provincesByCountry[companyData.country]?.map(
                          (province: ProvinceData, index: number) => (
                            <option key={index} value={province.name}>
                              {province.name}
                            </option>
                          )
                        )}
                    </Form.Control>
                    {errors.state && (
                      <p className={styles.validationMessage}>{errors.state}</p>
                    )}
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Ciudad</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={`${
                        errors.city ? styles.inputError : styles.input
                      }`}
                      required
                      type="text"
                      name="city"
                      value={companyData.city}
                      placeholder="change your city?"
                      onChange={handlerOnChange}
                    />
                    {errors.city && (
                      <p className={styles.validationMessage}>{errors.city}</p>
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Compañía</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={`${
                        errors.company ? styles.inputError : styles.input
                      }`}
                      required
                      type="text"
                      name="company"
                      value={companyData.company}
                      placeholder="change your company?"
                      onChange={handlerOnChange}
                    />
                    {errors.company && (
                      <p className={styles.validationMessage}>
                        {errors.company}
                      </p>
                    )}
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <div className={styles.divInputP}>
                    <Form.Control
                      className={`${
                        errors.address ? styles.inputError : styles.input
                      }`}
                      required
                      type="text"
                      name="address"
                      value={companyData.address}
                      placeholder="change your address?"
                      onChange={handlerOnChange}
                    />
                    {errors.address && (
                      <p className={styles.validationMessage}>
                        {errors.address}
                      </p>
                    )}
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Label>Profile Image</Form.Label>
                  <DragAndDrop />
                </Col>
                <Col></Col>
              </Row>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                className={styles.submit}
                disabled={
                  !companyData.name ||
                  !companyData.lastName ||
                  !companyData.email ||
                  !companyData.document ||
                  !companyData.phone ||
                  !companyData.country ||
                  !companyData.city ||
                  !companyData.state ||
                  !companyData.company ||
                  !companyData.address ||
                  !!errors.name ||
                  !!errors.lastName ||
                  !!errors.email ||
                  !!errors.city ||
                  !!errors.company ||
                  !!errors.address
                }
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default AdminCompanyModify;
