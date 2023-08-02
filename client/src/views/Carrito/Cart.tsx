/// IMPORTS
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "../Carrito/cart.css";
// STYLES
//.....

// CART
const Cart = () => {
  const handlerCompra = () => {};
  const handlerAdd = () => {};
  const handlerPlus = () => {};
  const handlerRest = () => {};

  let name = "CraftBeer";
  let imagen = "";
  let descripcion =
    " ";

  return (
    <div>
      <h1>Carrito de compras</h1>
      <strong>Selec</strong>
      <a> </a>
      <strong>Artículos pendientes por su compra</strong>
      <div className="">
        <Card className="card">
          <Link to={"/detail/:id"}>
            <img src={imagen} alt={name} />
          </Link>
          <h2>Nombre del producto</h2>
          <a>
            Descripción del producto:
            {descripcion}
          </a>
          <h3>Precio USDXXX</h3>
          <Button className="botonProduc" onClick={handlerCompra}>Comprar</Button>
          <Button className="botonProduc" onClick={handlerAdd}>Añadir Carrito</Button>
          <div className="produc">
            <Button className="botonPlus" onClick={handlerPlus}>+</Button>0
            <Button className="botonRest" onClick={handlerRest}>-</Button>
          </div>
        </Card>
        <Card className="articulos">
          Tus compras
          <h5>Artículos</h5>
          <a>4</a>
          <button className="boton">Procesar Compra</button>
        </Card>
        <div>
        Compras realizadas anteriormente
        </div>
        <div>
          Cuerpo de las cartas para la compra
          <Link to={"/detail/:id"}>
            <img src={imagen} alt={name} />
          </Link>
          <h3>Nombre</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
