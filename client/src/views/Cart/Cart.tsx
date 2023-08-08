/// IMPORTS
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Carousel, CarouselItem } from "react-bootstrap";
import CardCart from "../../components/CardCart/CardCart";
// STYLES
import "./Cart.css";

// CART
const Cart = () => {
  const handlerCompra = (event: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLButtonElement, EventTarget>) => {
    event.preventDefault();
    alert("Estamos intentando comprar");
  };

  let name = "CraftBeer";
  let imagen =
    "https://www.ngenespanol.com/wp-content/uploads/2018/08/7-buenas-razones-para-tomar-cerveza-1280x720.png";

  return (
    <div>
      <h1>Carrito de compras</h1>
      <div>
        <strong>Selec</strong>
        <strong>Artículos pendientes por su compra</strong>
        <div className="bodyCart">
          <div>
            <CardCart />
            <CardCart />
          </div>
          <Card
            style={{
              width: "300px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "D9D9D9;"
            }}
          >
            Tus compras
            <h5>Artículos</h5>
            <a>4</a>
              <Button onClick={handlerCompra} className="botonCart">
                Procesar Compra
              </Button>
          </Card>
        </div>

        <h5 className="titleAnterioresCart">Compras realizadas anteriormente</h5>
        <Carousel className="bodyAnterioresCart" data-bs-theme="dark">
          <CarouselItem>
            <Card.Body className="cardBodyCart">
              <Card className="dispocisionCart">
                <Link to={"/detail/:id"}>
                  <img className="imagenCart" src={imagen} alt={name} />
                </Link>
                <h5>Nombre</h5>
              </Card>
              <Card className="dispocisionCart">
                <Link to={"/detail/:id"}>
                  <img className="imagenCart" src={imagen} alt={name} />
                </Link>
                <h5>Nombre</h5>
              </Card>
              <Card className="dispocisionCart">
                <Link to={"/detail/:id"}>
                  <img className="imagenCart" src={imagen} alt={name} />
                </Link>
                <h5>Nombre</h5>
              </Card>
            </Card.Body>
          </CarouselItem>
          <CarouselItem>
            <Card.Body className="cardBodyCart">
              <Card className="dispocisionCart">
                <Link to={"/detail/:id"}>
                  <img className="imagenCart" src={imagen} alt={name} />
                </Link>
                <h5>Nombre</h5>
              </Card>
              <Card className="dispocisionCart">
                <Link to={"/detail/:id"}>
                  <img className="imagenCart" src={imagen} alt={name} />
                </Link>
                <h5>Nombre</h5>
              </Card>
              <Card className="dispocisionCart">
                <Link to={"/detail/:id"}>
                  <img className="imagenCart" src={imagen} alt={name} />
                </Link>
                <h5>Nombre</h5>
              </Card>
            </Card.Body>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};

export default Cart;