//.....

import {  Col, Container, Row} from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filters from "../../components/Filters/Filters";
import "./Shop.css"
// SHOP
const Shop = () => {
  return (
    <Container >
      <div className="search">
        <input type="text"className="input-Search" placeholder="     Buscar....." />
      </div>

      <Row>
        <Col xs={12} md={3}>
          <button className="button-Page">{"<"} </button>
          <button className="button-Page">1 </button>
          <button className="button-Page">{">"} </button>
      

          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column">
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
            <CardShop />
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;