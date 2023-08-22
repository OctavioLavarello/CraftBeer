/// IMPORTS
import { useState, useEffect } from "react";
//import { Dispatch, AnyAction } from "redux";
import "../Creation/Creation.css";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
// COMPONENTS
import CardUserProduct from "../../components/CardUsersProduct/CardUserProduct";
import { DragAndDrop } from "../../components/Cloudinary/Cloudinary.tsx"
import CreationPagination from "../../components/CreationPagination/CreationPagination.tsx";
// ACTIONS
import { createdProduct, ProductData, userCompanySalesSummary } from "../../redux/actions/actions";
// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

// CREATION
const Creation = () => {
  const dispatch = useDispatch<any>();
  // GLOBAL STATE
  const { accessLogin, urlImage, companySalesSum } = useSelector((state: AppState) => state);
  const idCompany = accessLogin.id;
  // LOCAL STATE
  const [currentPage, setCurrentPage] = useState<number>(1);
  // PAGINATION
  const itemsPerPage = 3;
  const indexOfLastBeer = currentPage * itemsPerPage;
  const indexOfFirstBeer = indexOfLastBeer - itemsPerPage;
  let currentBeers = companySalesSum.slice(indexOfFirstBeer, indexOfLastBeer);
  // PAGINATION FUNCTION
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const [input, setInput] = useState<ProductData>({
    name: "",
    image: urlImage,
    type: "",
    ABV: 0,
    description: "",
    price: 0,
    stock: 0,
    presentation: "",
    IBU: 0,
    userCompanyId: idCompany,
  });
 
  useEffect(() => {
    dispatch(userCompanySalesSummary(idCompany));
  }, []);
  useEffect(() => {
    setInput((prevInput) => ({ ...prevInput, image: urlImage }));
  }, [urlImage]);

  const [errors, setErrors] = useState({
    name: "Se requeire de un nombre para el producto",
    //image: "Debe suministrar un URL valido para la imagen",
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

    // if(name === "image"){
    //   if (input.image !== "") setErrors({ ...errors, image: "" });
    //     else setErrors({ ...errors, image: "Información requerida" });
    // }
    
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
  console.log(errors);
  

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
                type="number"
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
              type="number"
            />
            <h6 className="mensajes">{errors.IBU}</h6>
          </Col>
          <Col>
            <Form.Control
              placeholder="Stock"
              name="stock"
              onChange={handlerChange}
              type="number"
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
              type="number"
            />
            <h6 className="mensajes">{errors.ABV}</h6>
          </Col>
        </Row>
        <Row style={{ margin: "15px" }}>
          <Col>
            <DragAndDrop/>
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
        <div>
          <span className="spamMisArt">
            <strong>MIS ARTÍCULOS PUBLICADOS</strong>
          </span>
          {currentBeers.map((card: any) => (
            <CardUserProduct 
            key={card.id} 
            id={card.id}
            name={card.name} 
            image={card.image} 
            price={card.price}
            description={card.description}
            />
          ))}
        </div>
        <div>
          <CreationPagination
          itemsPerPage={itemsPerPage}
          totalItems={companySalesSum.length}
          currentPage={currentPage}
          paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Creation;
