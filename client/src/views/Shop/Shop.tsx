//.....

import { Col, Container, Row } from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filters from "../../components/Filters/Filters";
import style from "./Shop.module.css"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderFilters } from "../../redux/actions/actions";
// SHOP

const Shop = () => {

  const dispatch = useDispatch()


  // estado para controlar el input search
  const [input, setInput] = useState("")
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  // estado para controlar el paginado 
  interface CustomEventTarget extends EventTarget {
    name: string;
  }
  const [numberPage, setNumberPage] = useState(0)

  const handlerPage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as CustomEventTarget;
    if (target.name === "<") {
      setNumberPage(numberPage - 1)
    } else setNumberPage(numberPage + 1)
  }


  //controlar el disable para navegar en paginas 
  const disableboton = {
    adv: false,
    back: false
  };
  if (numberPage < 1) disableboton.back = true





  // cargar el estado filter con el nombre que ingresa en el input 
  const handlerClick = () => {
    setInput("")
    dispatch(orderFilters({ name: input }))
    console.log(input);
  }

  return (
    <Container >
      <div className={style.search}>
        <input type="text"
          className={style.input_Search}
          placeholder="      Buscar....."
          onChange={handlerChange}
          value={input}
        />
        <button className={style.button} disabled={false} onClick={handlerClick}>🔍</button>
      </div>
      <Row>
        <Col xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button className={style.button_Pagechange} onClick={handlerPage} name="<" disabled={disableboton.back}>{"<"} </button>
            <button className={style.button_Pagelateral}>{numberPage - 1} </button>
            <button className={style.button_Page}>{numberPage} </button>
            <button className={style.button_Pagelateral}>{numberPage + 1} </button>
            <button className={style.button_Pagechange} onClick={handlerPage} name=">">{">"} </button>
          </div>
          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column">
            <CardShop
              numberPage={numberPage} />
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;