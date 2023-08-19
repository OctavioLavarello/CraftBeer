/// IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
//import { useState } from "react";
// STYLES
import { Card, Col, Row } from "react-bootstrap";

// CARD USER PRODUCT
interface userProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

const CardUserProduct: React.FC<userProductCardProps> = ({id, name, image, price, description}) => {
  return (
    <Card
      style={{
        backgroundColor: "#4b0909",
        color: "#fff",
        padding: "2% 3%",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Card.Body style={{ border: "solid red" }}>
        <Row>
          <Col>
            <NavLink to={`/detail/${id}`}>
              <Card.Img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  marginLeft: "-10%",
                }}
              />
            </NavLink>
          </Col>
          <Col>
            <Card.Title>{name}</Card.Title>
          </Col>
          <Col sm={5}>
            <Card.Text style={{ fontSize: "13px" }}>
              {description}
            </Card.Text>
          </Col>
          <Col>
            <h3>{price} USD </h3>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardUserProduct;
