/// IMPORTS
import { useState } from "react";
//import { Dispatch, AnyAction } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "../Creation/Creation.css";
import CardUserProduct from "../../components/CardUsersProduct/CardUserProduct";
import { useDispatch } from "react-redux";
import { createdProduct, ProductData } from "../../redux/actions/actions";

// STYLES
//.....

// CREATION
const Creation = () => {
  const dispatch = useDispatch<any>();

  const [input, setInput] = useState<ProductData>({
    name: "",
    image: "",
    type: "",
    ABV: 0,
    description: "",
    price: 0,
    stock: 0,
    presentation: "",
    IBU: 0,
    userCompanyId: `string`,
  });

  const [errors, setErrors] = useState({
    name: "Se requeire de un nombre para el producto",
    image: "Debe suministrar un URL valido para la imagen",
    type: "Indicar el tipo del producto",
    ABV: "Indicar un valor entre 0 y 90",
    description: "Indicar la descripción del producto",
    price: "Indique el precio unitario del produto",
    stock: "Indicar la cantidad de unidades disponibles",
    presentation: "Indicar la presentación del producto",
    IBU: "Indicar el grado alcohólico",
  });

  const validation = (input: any, name: any) => {
    if (name === "name") {
      if (input.name !== "") setErrors({ ...errors, name: "" });
      else setErrors({ ...errors, name: "Información requerida" });
    }
    if (name === "image") {
      if (input.image !== "") setErrors({ ...errors, image: "" });
      else setErrors({ ...errors, image: "Información requerida" });
    }
    if (name === "type") {
      if (input.type !== "") setErrors({ ...errors, type: "" });
      else setErrors({ ...errors, type: "Información requerida" });
    }
    if (name === "ABV") {
      if (input.ABV !== "") setErrors({ ...errors, ABV: "" });
      else setErrors({ ...errors, ABV: "Información requerida" });
    }
    if (name === "description") {
      if (input.description !== "") setErrors({ ...errors, description: "" });
      else setErrors({ ...errors, description: "Información requerida" });
    }
    if (name === "price") {
      if (input.price !== "") setErrors({ ...errors, price: "" });
      else setErrors({ ...errors, price: "Información requerida" });
    }
    if (name === "stock") {
      if (input.stock !== "") setErrors({ ...errors, stock: "" });
      else setErrors({ ...errors, stock: "Información requerida" });
    }
    if (name === "presentation") {
      if (input.presentation !== "") setErrors({ ...errors, presentation: "" });
      else setErrors({ ...errors, presentation: "Información requerida" });
    }
    if (name === "IBU") {
      if (input.IBU !== "") setErrors({ ...errors, IBU: "" });
      else setErrors({ ...errors, IBU: "Información requerida" });
    }
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createdProduct(input));
    setInput({
      ...input,
    });
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
  console.log(input);

  return (
    <div className="bodyFormP">
      <Form
        style={{
          width: "50%",
          height: "auto",
        }}
        onSubmit={handlerSubmit}
      >
        <div className="tituloFormCreacion">
          A continuación podrás indicar la información para la publicación de tu
          producto:
        </div>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              name="name"
              placeholder="Nombre del pruducto"
              onChange={handlerChange}
            />
            <h6 className="mensajes">{errors.name}</h6>
          </Col>
          <Col>
            <InputGroup className="mb-2">
              <Form.Control
                onChange={handlerChange}
                placeholder="Precio"
                name="price"
              />
              <InputGroup.Text>USD</InputGroup.Text>
            </InputGroup>
            <h6 className="mensajes">{errors.price}</h6>
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              placeholder="IBU"
              name="IBU"
              onChange={handlerChange}
              max={90}
              min={0}
            />
            <h6 className="mensajes">{errors.IBU}</h6>
          </Col>
          <Col>
            <Form.Control
              placeholder="Stock"
              name="stock"
              onChange={handlerChange}
            />
            <h6 className="mensajes">{errors.stock}</h6>
          </Col>
        </Row>
        <Row style={{ margin: "15px", justifyContent: "center" }}>
          <Col>
            <select name="type" className="selector" onChange={handlerChange}>
              <option value="">Todos los tipos</option>
              <option value="Lager">Lager</option>
              <option value="Ale">Ale</option>
              <option value="IPA">IPA</option>
              <option value="Stout">Stout</option>
              <option value="Porter">Porter</option>
              <option value="Wheat Beer">Wheat Beer</option>
              <option value="Sour Beer">Sour Beer</option>
              <option value="Belgian Strong Ale">Belgian Strong Ale</option>
              <option value="Pilsner">Pilsner</option>
              <option value="Amber Ale">Amber Ale</option>
              <option value="Barleywine">Barleywine</option>
              <option value="Saison">Saison</option>
              <option value="Rauchbier">Rauchbier</option>
              <option value="Bock">Bock</option>
              <option value="Scotch Ale">Scotch Ale</option>
            </select>
            <h6 className="mensajes">{errors.type}</h6>
          </Col>
          <Col>
            <Form.Control
              placeholder="Graduación alcohólica"
              name="ABV"
              onChange={handlerChange}
            />
            <h6 className="mensajes">{errors.ABV}</h6>
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              placeholder="URL Imagen del producto"
              name="image"
              onChange={handlerChange}
            />
            {/* <Form.Group controlId="formFile" className="mb-1">
              <Form.Control type="file" name="image" onChange={handlerChange}/>
              <h6 className="mensajes">{errors.image}</h6>
            </Form.Group> */}
          </Col>
          <Col>
            <Form.Control
              placeholder="Tipo de presentación"
              name="presentation"
              onChange={handlerChange}
            />
            <h6 className="mensajes">{errors.presentation}</h6>
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <Form.Control
              style={{ height: "100px" }}
              placeholder="Descripción del producto"
              name="description"
              onChange={handlerChange}
            />
            <h6 className="mensajes">{errors.description}</h6>
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
        <Col style={{color:"red"}}>Información solo temporal. De uso dev
            <Form.Control
              style={{ color: "red" }}
              placeholder="ID de la compañía. Esta información es solo para prueba, se optendrá desde el localstorage una vez se haga el login del usuario"
              name="userCompanyId"
              onChange={handlerChange}
            />
          </Col>
        </Row>
        <div className="botonCentro">
          <Button
            type="submit"
            style={{
              margin: "20px",
              width: "auto",
              justifyContent: "center",
              backgroundColor: "#A37D34",
              border: "none",
              boxShadow: "5px 5px 10px black",
            }}
            className="botonFormProd"
            disabled={disable(errors)}
          >
            Cargar Producto
          </Button>
        </div>
      </Form>
      <div className="bodyMisArt">
        <span className="spamMisArt">
          <strong>MIS ARTÍCULOS PUBLICADOS</strong>
        </span>
        <CardUserProduct />
      </div>
    </div>
  );
};

export default Creation;
