import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState, beers } from "../../../redux/reducer";
import "./AdminProductModify.css";
import { DragAndDrop } from "../../../components/Cloudinary/Cloudinary.tsx";
import { toast } from "react-hot-toast";

const AdminProductModify: React.FC = () => {
  const urlImage: string = useSelector((state: AppState) => state.urlImage);
  const navigate = useNavigate();
  const { idProduct } = useParams();
  const [infoProduct, setInfoProduct] = useState<beers>({
    ABV: 0,
    IBU: 0,
    createdAt: "",
    description: "",
    id: "",
    image: urlImage,
    name: "",
    presentation: "",
    price: 0,
    qualification: null,
    status: true,
    stock: 0,
    type: "",
    updatedAt: "",
    userCompanyId: ""
   
  });
  console.log(infoProduct);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/product/${idProduct}`);
      console.log(response.data);
      setInfoProduct(response.data);
    };
    solicitud();
  }, [idProduct]);

  useEffect(() => {
    setInfoProduct((prevInput) => ({ ...prevInput, image: urlImage }));
  }, [urlImage]);

  const handlerOnChange = (event: any) => {
    setInfoProduct({
      ...infoProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handlerIsClicked = () => {
    setIsClicked(!isClicked);
  };

  const handlerOnSubmit: React.FormEventHandler<HTMLFormElement>  = async (
    event
  ) => {
    event.preventDefault();
    try {
      await axios.put(`/product/${idProduct}`, {...infoProduct, companyId: infoProduct.userCompanyId});
      //await handlerLocalStorageRefresh();
      toast.success("Information update successfull");
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
        toast.error("An error occurred while upload company data");
      }
    }
  };

  return (
    <div>
      {!isClicked ? (
        //Información no editable
        <div className="bodyFormAPM">
          <div className="bodyImageAPM">
            <img
              src={infoProduct.image}
              alt={infoProduct.name}
              className="imagAPM"
            />
          </div>
          <Form className="formularioAPM">
            <div className="bodyimputsAPM">
              <Row className="bodyColumAPM">
                <Col>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={infoProduct.name}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={infoProduct.type}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      readOnly
                      type="number"
                      value={infoProduct.price}
                    />
                  </Form.Group>
                </Col>{" "}
              </Row>
              <Row className="bodyColumAPM">
                <Col>
                  <Form.Group>
                    <Form.Label>IBU</Form.Label>
                    <Form.Control
                      readOnly
                      type="number"
                      value={`${infoProduct.IBU}`}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Presentation</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={infoProduct.presentation}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>ABV</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={infoProduct.ABV}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="bodyColumAPM">
                <Col>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      readOnly
                      type="text"
                      value={infoProduct.description}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div style={{ textAlign: "center", margin: "1%" }}>
              <Button className="botonAPM" onClick={() => navigate(-1)}>
                Back
              </Button>
              <Button className="botonAPM" onClick={handlerIsClicked}>
                Edit Product
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        //Se convierte en formulario editable
        <div className="bodyFormAPM">
          <div className="bodyImageAPM">
            <DragAndDrop />
          </div>
          <Form className="formularioAPM" onSubmit={handlerOnSubmit}>
            <div className="bodyimputsAPM">
              <Row className="bodyColumAPM">
                <Col>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Change product name"
                      name="name"
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <select
                      name="type"
                      className="selector"
                      onChange={handlerOnChange}
                    >
                      <option value="">Todos los tipos</option>
                      <option value="Lager">Lager</option>
                      <option value="Ale">Ale</option>
                      <option value="IPA">IPA</option>
                      <option value="Stout">Stout</option>
                      <option value="Porter">Porter</option>
                      <option value="Wheat Beer">Wheat Beer</option>
                      <option value="Sour Beer">Sour Beer</option>
                      <option value="Belgian Strong Ale">
                        Belgian Strong Ale
                      </option>
                      <option value="Pilsner">Pilsner</option>
                      <option value="Amber Ale">Amber Ale</option>
                      <option value="Barleywine">Barleywine</option>
                      <option value="Saison">Saison</option>
                      <option value="Rauchbier">Rauchbier</option>
                      <option value="Bock">Bock</option>
                      <option value="Scotch Ale">Scotch Ale</option>
                    </select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Change product price"
                      name="price"
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>{" "}
              </Row>
              <Row className="bodyColumAPM">
                <Col>
                  <Form.Group>
                    <Form.Label>IBU</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Change product IBU"
                      name="IBU"
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Presentation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Change product presentation"
                      name="presentation"
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>ABV</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Change product ABV"
                      name="ABV"
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="bodyColumAPM">
                <Col>
                  <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Change product description"
                      name="description"
                      onChange={handlerOnChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div style={{ textAlign: "center", margin: "1%" }}>
              <Button
                className="botoneditAPM"
                type="submit"
                disabled={
                  !infoProduct.name ||
                  !infoProduct.price ||
                  !infoProduct.ABV ||
                  !infoProduct.IBU ||
                  !infoProduct.presentation ||
                  !infoProduct.description
                }
              >
                Save change
              </Button>
              <Button className="botoneditAPM" onClick={handlerIsClicked}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AdminProductModify;
