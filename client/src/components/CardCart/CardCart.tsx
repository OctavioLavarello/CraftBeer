import { Container } from "react-bootstrap";
import style from "./CardCart.module.css"
import { useEffect, useState } from "react";
import { SaveDataLS, saveDataCart } from "../LocalStorage/LocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { localStorageCart } from "../../redux/actions/actions";
import { AppState } from "../../redux/reducer";


export interface productCart {
  name: string;
  summary: string;
  image: string;
  price: number;
  quantity: number,
  id: string
}

const CardCart = ({ name, summary, price, image, quantity, id }: productCart) => {


  const dispatch = useDispatch();

  //estado para controlar los input de cantidades 
  const [item, setItem] = useState(0);

  let localStorageRedux = useSelector((state:AppState)=>state.localStorageCart)

  // setea los cambios de cantidades y ejecuta para cargar en localStorage
  const handlerItemCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const updatedQuantity = target.name === '+' ? item + 1 : item - 1;
    setItem(updatedQuantity);

    const itemData: SaveDataLS = {
      id,
      name,
      price,
      image,
      summary,
      quantity: updatedQuantity,
    };
    saveDataCart(itemData);
    dispatch(localStorageCart(itemData));
  }

   // Cargar la cantidad del localStorage cuando el componente se monta
   useEffect(() => {
    const savedQuantity = localStorage.getItem(id);
    if (savedQuantity !== null) {
      const parsedQuantity = JSON.parse(savedQuantity).quantity;
      setItem(parsedQuantity);
      
    } else {
      setItem(0);
    }

  }, [id,localStorageRedux]);


  //eliminar item del local storage 
  const deleteItemLocal = () => {
    localStorage.removeItem(id)
  }

  return (
    <Container>

      <div className={style.container}>
        <div className={style.image}>
          <img src={image} alt="" />
        </div>
        <div className={style.title}>
          <h5>{name}</h5>
          <p>{summary} </p>
        </div>
        <div className={style.buttons}>
          <button className={style.custom_button} name={"-"} onClick={handlerItemCart} >-</button>
          <div className={style.quantityUn}>{quantity} unidades</div>
          <button className={style.custom_button} name={"+"} onClick={handlerItemCart} >+</button>
        </div>
        <div className={style.price}>
          <h3>$ {(price * quantity).toFixed(2)}</h3>
        </div>
        <button className={style.buttonClose} onClick={deleteItemLocal}>x</button>
      </div>
    </Container>
  );
};
export default CardCart;
