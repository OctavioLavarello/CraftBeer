///IMPORTS
import { useState, useEffect } from "react";
import { AnyAction, Dispatch } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
// import "../sellerSingUp/selllerSingUp.css";
import { useDispatch, useSelector } from "react-redux";
import { createdCompany } from "../../redux/actions/actions";
import {DragAndDrop} from "../../components/Cloudinary/Cloudinary.tsx"
import { AppState } from "../../redux/reducer";
import { provincesByCountry, ProvinceData } from '../../components/provincesData/provincesData.ts';
//import { toast } from "react-hot-toast";

// STYLES
import Styles from"./sellerSingUp.module.css";

// import Styles from './sellerSingUp.module.css';
//....

interface CountryData {
  name: {
    common: string;
  };
}
// SELLER SING UP
const SellerSingUp: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction> | any>();
  const urlImage = useSelector((state: AppState)=> state.urlImage)
  const [countryNames, setCountryNames] = useState<string[]>([]);

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    document: 0,
    email: "",
    password: "",
    phone: 0,
    country: "",
    city: "",
    state: "",
    company: "",
    address: "",
    image: urlImage,
  });

  useEffect(() => {
    setInput((prevInput) => ({ ...prevInput, image: urlImage }));
  }, [urlImage]);

  const [errors, setErrors] = useState({
    name: "Debe indicar su nombre",
    lastName: "Debe indicar su apellido",
    document: "Debe indicar su número de documento de identidad",
    email: "Debe indicar un correo electrónico valido",
    password: "Proporcione una contraseña",
    phone: "Debe indicar un número valido",
    country: "Debe indicar su país de residencia",
    city: "Debe indicar su ciudad de residencia",
    state: "Debe indicar el estado/región/provincia donde reside",
    company: "Debe indicar el nombre de su compañía",
    address: "Debe indicar la dirección de la compañía",
    //image: "Debe proporcionar una imagen del logo de su compañía",
  });

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
    dispatch(createdCompany(input));
    setInput({
      ...input,
    });
  };
  
  
  console.log(input);
  console.log(errors);
  

  const validation = (input: any, name: any) => {
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Información requerida" });
    }
    if (name === "lastName") {
      if (input.lastName !== "") setErrors({ ...errors, lastName: "" });
      else setErrors({ ...errors, lastName: "Información requerida" });
    }
    if (name === "document") {
      if (input.document !== "") setErrors({ ...errors, document: "" });
      else setErrors({ ...errors, document: "Información requerida" });
    }
    if (name === "email") {
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
    if (name === "phone") {
      if (input.phone !== "") setErrors({ ...errors, phone: "" });
      else setErrors({ ...errors, phone: "Información requerida" });
    }
    if (name === "country") {
      if (input.country !== "") setErrors({ ...errors, country: "" });
      else setErrors({ ...errors, country: "Información requerida" });
    }
    if (name === "city") {
      if (input.city !== "") setErrors({ ...errors, city: "" });
      else setErrors({ ...errors, city: "Información requerida" });
    }
    if (name === "state") {
      if (input.state !== "") setErrors({ ...errors, state: "" });
      else setErrors({ ...errors, state: "Información requerida" });
    }
    if (name === "company") {
      if (input.company !== "") setErrors({ ...errors, company: "" });
      else setErrors({ ...errors, company: "Información requerida" });
    }
    if (name === "address") {
      if (input.address !== "") setErrors({ ...errors, address: "" });
      else setErrors({ ...errors, address: "Información requerida" });
    }
    // if (name === "image") {
    //   if (input.image !== "") setErrors({ ...errors, image: "" });
    //   else setErrors({ ...errors, image: "Información requerida" });
    // }
  };

  const handlerChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    validation(
      {
        ...input,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  const disable = (errors: { [key: string]: string }): boolean => {
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
    <div className="bodyFormSeller">
      <div className={Styles.formBoxContainer}>
        <Form className={Styles.form}
        onSubmit={handlerSubmit}
        >
            <h5 className={Styles.title}>
              Crea tu usuario de vendedor. Propociona la siguiente información:
            </h5>
            <div className={Styles.title}>
              <strong>USUARIO</strong>
            </div>
          <Row className={Styles.row1}>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Correo electrónico"
              onChange={handlerChange}
              name="email"
              />
              <h6 className={Styles.mensajes}>{errors.email}</h6>
            </Col>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Contraseña"
              onChange={handlerChange}
              name="password"
              type="password"
              />
              <h6 className={Styles.mensajes}>{errors.password}</h6>
            </Col>
          </Row>
          <div className={Styles.title}>
            <strong>DATOS PERSONALES</strong>
          </div>
          <Row className={Styles.row1}>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Nombres"
              onChange={handlerChange}
              name="name"
              />
              <h6 className={Styles.mensajes}>{errors.name}</h6>
            </Col>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Apellidos"
              onChange={handlerChange}
              name="lastName"
              />
              <h6 className={Styles.mensajes}>{errors.lastName}</h6>
            </Col>
          </Row>
          <Row className={Styles.row1}>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Documento de identidad"
              onChange={handlerChange}
              name="document"
              />
              <h6 className={Styles.mensajes}>{errors.document}</h6>
            </Col>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Teléfono móvil"
              onChange={handlerChange}
              name="phone"
              />
              <h6 className={Styles.mensajes}>{errors.phone}</h6>
            </Col>
          </Row>
          <div className={Styles.title}>
            <strong>DATOS DE MI COMPAÑÍA</strong>
          </div>
          <Row className={Styles.row1}>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Nombre de la Empresa"
              onChange={handlerChange}
              name="company"
              />
              <h6 className={Styles.mensajes}>{errors.company}</h6>
            </Col>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Dirección de la empresa"
              onChange={handlerChange}
              name="address"
              />
              <h6 className={Styles.mensajes}>{errors.address}</h6>
            </Col>
          </Row>
          <Row className={Styles.row1}>
            <Col>
              <Form.Control
              className={Styles.input}
              as="select"
              name="country"
              value={input.country}
              onChange={handlerChange}
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
              <Form.Control
              className={Styles.input}
              as="select"
              name="state"
              value={input.state}
              onChange={handlerChange}
              >
                <option value="">Selecciona una provincia...</option>
                {input.country &&
                  provincesByCountry[input.country]?.map(
                    (province: ProvinceData, index: number) => (
                      <option key={index} value={province.name}>
                        {province.name}
                      </option>
                    )
                  )}
              </Form.Control>
              <h6 className={Styles.mensajes}>{errors.state}</h6>
            </Col>
          </Row>
          <Row className={Styles.row1}>
            <Col>
              <Form.Control
              className={Styles.input}
              placeholder="Ciudad"
              onChange={handlerChange}
              name="city"
              />
              <h6 className={Styles.mensajes}>{errors.city}</h6>
            </Col>

          {/* </Row>
          <Row className={Styles.row1}> */}
            <Col>
            <DragAndDrop/>
              {/* <Form.Control
                placeholder="URL Logo o imagen"
                onChange={handlerChange}
                name="image"
              />
              <h6 className="errorCompany">{errors.image}</h6> */}
            </Col>
          </Row>
          <div className="centrado">
            <Button
              style={{
                margin: "20px",
                width: "auto",
                justifyContent: "center",
                backgroundColor: "#A37D34",
                border: "none",
                boxShadow: "5px 5px 10px black",
              }}
              type="submit"
              disabled={disable(errors)}
            >
              Crear Usuario
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SellerSingUp;
