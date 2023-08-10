/// IMPORTS
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCart, { productCart } from "../../components/CardCart/CardCart";
// STYLES
import style from "./Cart.module.css";





// CART
const Cart = () => {


  //Funcion para almacenar los valores del cart 
  let productsCartItems: productCart[] = []


  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      const storedItem = localStorage.getItem(key);
      if (storedItem !== null) {
        const parsedItem = JSON.parse(storedItem);
        productsCartItems.push(parsedItem);
      }
    }
  }





  // sumar total de precios de productos 
  let total = 0
  for (let i = 0; i < productsCartItems.length; i++) {
    total = total + (productsCartItems[i].quantity * productsCartItems[i].price)
  }



  return (
    <>

      <div className={style.container}>

        <div className={style.containerCard}>
          {productsCartItems.length === 0 &&
            <div className={style.messageEmpty}>
              <h3>Aun no hay productos en el carrito !!!</h3>
            </div>}

          {productsCartItems?.map((product) => (

            <CardCart
              key={product.id}
              id={product.id}
              name={product.name}
              summary={product.summary}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
            />
          ))}

          <div style={{ marginLeft: "775px" }}>
            <Link to={"/Shop"}>
              <button className={style.buttonBuy}>Agregar Art.</button>
            </Link>

          </div>
        </div>
        <div className={style.panelCart}>
          <h2>Tu compra </h2>
          <h5>Productos</h5>
          <hr />
          {productsCartItems?.map((product) => (
            <div className={style.listelement}>
              <li>{product.quantity}  {product.name}/s</li>
              <p>$ {(product.price * product.quantity).toFixed(2)}</p>
            </div>))
          }

          <div className={style.listelement}>
            <h5>TOTAL</h5>
            <h5>$ {total}</h5>
          </div>

          <hr />
          <Link to={"/login"}>
            <button className={style.buttonBuy}>Iniciar Compra</button>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Cart;