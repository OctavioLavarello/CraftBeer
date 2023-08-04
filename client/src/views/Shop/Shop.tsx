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
  const [input, setInput] = useState("")

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handlerClick = () => {
    setInput("")
    dispatch(orderFilters({name:input}))
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
          <div style={{display:"flex",justifyContent:"center"}}>
          <button className={style.button_Page}>{"<"} </button>
          <button className={style.button_Page}>1 </button>
          <button className={style.button_Page}>1 </button>
          <button className={style.button_Page}>1 </button>
          <button className={style.button_Page}>{">"} </button>
          </div>
          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column">
            <CardShop />
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;