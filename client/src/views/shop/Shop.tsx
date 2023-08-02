
// STYLES
//.....

import { Col, Container, Row } from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filter from "../../components/Filters/Filters";
// SHOP
const Shop = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Filter/>
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column">
            <CardShop/>
            <CardShop/>
            <CardShop/>
            <CardShop/>
            <CardShop/>
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;