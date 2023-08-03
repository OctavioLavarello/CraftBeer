//.....

import {  Col, Container, Row} from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filters from "../../components/Filters/Filters";
import style from "./Shop.module.css"
// SHOP
const Shop = () => {
  return (
    <Container >
      <div className={style.search}>
        <input type="text"className={style.input_Search} placeholder="     Buscar....." />
      </div>
      <Row>
        <Col xs={12} md={3}>
          <button className={style.button_Page}>{"<"} </button>
          <button className={style.button_Page}>1 </button>
          <button className={style.button_Page}>{">"} </button>
          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column">
            <CardShop/>
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;