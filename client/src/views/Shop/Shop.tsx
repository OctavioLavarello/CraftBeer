//.....

import { Button, Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filters from "../../components/Filters/Filters";
import "./Shop.css"
// SHOP
const Shop = () => {
  return (
    <Container >
      <div className="search">
      <InputGroup className="mb-3 mt-5">
        <InputGroup.Text >🍻</InputGroup.Text>
        <Form.Control
          placeholder="Buscar...."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </div>

      <Row>
        <Col xs={12} md={3}>
          <Button >1</Button>
          <Button>1</Button>
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