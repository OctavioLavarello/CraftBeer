/// IMPORTS
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CardCart, { productCart } from "../../components/CardCart/CardCart";
// STYLES
import style from "./Cart.module.css";
import {  useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import { useEffect, useState } from "react";
import Pay from "../Pay/Pay";
import { UserData } from "../../components/LocalStorage/LocalStorage";



export interface Cart {
  user: UserData,
  product: productCart[]
}


// CART
const Cart = () => {

  const navigation = useNavigate()
  const acces = useSelector((state: AppState) => state.accessLogin)


  //Funcion para almacenar los valores del cart 
  let productsCartItems: productCart[] = []
  const itemCart = useSelector((state: AppState) => state.localStorageCart)

  for (let i = 0; i < itemCart.length; i++) {
    if (!itemCart[i].hasOwnProperty("user"))
      productsCartItems.push(itemCart[i])
  }


  // sumar total de precios de productos 
  let total = 0
  for (let i = 0; i < productsCartItems.length; i++) {
    total = total + (productsCartItems[i].quantity * productsCartItems[i].price)
  }


  // logica para cargar productos a la pasarela de pago 
  const [dataPay, setDataPay] = useState<Cart>({
    user: {
      id: "",
      name: "",
      lastName: "",
      role: "",
      access: ""
    },
    product: []
  })

  useEffect(() => {
    const userLogin = localStorage.getItem('user');
    if (userLogin) {
      const parsedUserLogin = JSON.parse(userLogin);
      const user = parsedUserLogin.user;
      const dataUser: UserData = user
      setDataPay({
        user: dataUser,
        product: productsCartItems
      });
    }
  }, [itemCart]);


  // iniciar compra 
  const handlerBuy = () => {
    if (!acces.access) {
      navigation("/login")
    } else {
      Pay(dataPay)
    }
  }





  return (
    <>

      <div className={style.container}>

        <div className={style.containerCard}>
          {productsCartItems.length === 0 &&
            <div className={style.messageEmpty}>
              <h3>There are no beers in the cart yet!!!</h3>
            </div>}

          {productsCartItems.map((product) => (
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

          <div style={{justifyContent:"flex-end", display:"flex"}}>
            <Link to={"/Shop"}>
              <button className={style.buttonShop}>Add beer</button>
            </Link>

          </div>
        </div>
        <div className={style.panelCart}>
          <h2>Your purchase</h2>
          <h5>Beers</h5>
          <hr />
          {productsCartItems?.map((product) => (
         
            <div className={style.listelement} key={product.id}>
                
              <li>{product.quantity}  {product.name}/s</li>
              <p>U$S {(product.price * product.quantity).toFixed(2)}</p>
            </div>))
          }

          <div className={style.listelement}>
            <h5>TOTAL</h5>
            <h5>U$S {(total.toFixed(2))}</h5>
          </div>

          <hr />
          <button
            className={style.buttonBuy}
            onClick={handlerBuy}
            disabled={productsCartItems.length <= 0}
          >
            Start Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;