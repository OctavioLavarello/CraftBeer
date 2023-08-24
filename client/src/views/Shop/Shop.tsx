//.....

import { Col, Container, Row } from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filters from "../../components/Filters/Filters";
import style from "./Shop.module.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderFilters } from "../../redux/actions/actions";
import { AppState } from "../../redux/reducer";
import { Link } from "react-router-dom";
import craftBeerLogo from "../../assets/img/craftBeerLogo.jpg";

// SHOP

const Shop = () => {

  const dispatch = useDispatch()
  const filters = useSelector((state: AppState) => state.beerFilters)

  //numero de paginas recibidas desde el back 
  let pages = useSelector((state: AppState) => state.totalPages)


  //traer la cantidad de articulos en el local storage
  const itemCart = useSelector((state: AppState) => state.localStorageCart)
  let sumItem = 0
  itemCart.forEach(element => {
    if (!element.hasOwnProperty("user"))
      sumItem = sumItem + element.quantity
  });




  // estado para controlar el input search
  const [input, setInput] = useState("")
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }


  useEffect(() => {
    dispatch(orderFilters({ ...filters, name: input }))
  }, [input])


  // estado para controlar el paginado 
  interface CustomEventTarget extends EventTarget {
    name: string;
  }
  const [numberPage, setNumberPage] = useState(1)
  const handlerPage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as CustomEventTarget;
    if (target.name === "<") {
      setNumberPage(numberPage - 1)
    } else { setNumberPage(numberPage + 1) }
  }


  //si se aplican filtros se redirige a la pagina 1
  useEffect(() => {
    setNumberPage(1);
  }, [filters.IBU, filters.order, filters.AVB, filters.price, filters.qualification, filters.type, filters.name])

  // controla el estado del paginado en la propiedad pag
  useEffect(() => {
    dispatch(orderFilters({ ...filters, pag: numberPage }));
  }, [numberPage])


  //controlar el disable para navegar en paginas 
  const disableBoton = {
    adv: false,
    back: false,
    search: true,
  };
  if (numberPage < 2) disableBoton.back = true
  if (numberPage === pages || pages === 0) disableBoton.adv = true
  if (input.length > 2) disableBoton.search = false

  //mostrar carrito en pantalla solo si es usuario 
  const rol = useSelector((state: AppState) => state)


  // cargar el estado filter con el nombre que ingresa en el input 
  const handlerClick = () => {
    setInput("")
    setNumberPage(1)
    dispatch(orderFilters({ ...filters, name: input }))
  }

  return (
    <Container >
      <div className={style.search}>
        <input type="text"
          className={style.input_Search}
          placeholder="Buscar....."
          onChange={handlerChange}
          value={input}
        />
        <button className={style.button} disabled={disableBoton.search} onClick={handlerClick}>🔍</button>
        <button className={style.buttonAll} onClick={handlerClick}>All</button>
        
        {rol.accessLogin.role !== "Company" && (
          <Link to={"/cart"}>
            <div className={style.imageCart}>
              <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" />
              <div className={style.imageCartdiv}>
                {sumItem}
              </div>
            </div>
          </Link>
        )}
      </div>
      <Row>

        <Col xs={12} md={3} style={{ justifyContent: "center", alignItems: "center" }}>
          <div className={style.containerLogo}>
            <img src={craftBeerLogo} alt="" style={{ objectFit: "cover", width: "100%" }} />
          </div>
          <h5 style={{ marginLeft: "38%" }}>PAGINAS</h5>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button className={style.button_Pagechange} onClick={handlerPage} name="<" disabled={disableBoton.back}>{"<"} </button>
            <button className={style.button_Pagelateral}>{numberPage === 1 ? <></> : numberPage - 1} </button>
            <button className={style.button_Page}> {numberPage} </button>
            <button className={style.button_Pagelateral}>{numberPage < pages ? numberPage + 1 : <></>} </button>
            <button className={style.button_Pagechange} onClick={handlerPage} name=">" disabled={disableBoton.adv}>{">"} </button>
          </div>
          <div className={style.filter}>
          <Filters />

          </div>
          <h5 className={style.containerTitlePublicidad}>ESPACIO PUBLICITARIO</h5>
          <div className={style.containerpublicidad}>
            <img src="https://thumbs.gfycat.com/IlliteratePoliteLeech-size_restricted.gif" alt="" style={{ objectFit: "cover", width: "100%" }} />
          </div>
          <div className={style.containerpublicidad}>
            <img src="https://i.pinimg.com/originals/77/81/ae/7781ae6ad9627464d20fc605b774e6a9.gif" alt="" style={{ objectFit: "cover", width: "100%" }} />
          </div>
          <div className={style.containerpublicidad}>
            <img src="https://unapausaparalapublicidad.files.wordpress.com/2014/08/san-miguel.gif" alt="" style={{ objectFit: "cover", width: "100%" }} />
          </div>
        </Col>
        <Col xs={12} md={9} className={style.cardsContainer}>
          <div className={style.Cards}>
            <CardShop />
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;