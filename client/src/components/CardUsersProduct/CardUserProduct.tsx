/// IMPORTS
import React from "react";
import { NavLink } from "react-router-dom";
//import { useState } from "react";
// STYLES
import { Card, Col, Row } from "react-bootstrap";
import styles from "./CardUserProduct.module.css"

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
    <NavLink to ={`/putProduct/${id}`}className={styles.cardiv}>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <Row>
            <Col>
              <Card.Img
                src={image}
                className={styles.img}
              />
            </Col>
            <Col>
              <Card.Title
              className={styles.name}
              >{name}</Card.Title>
            </Col>
            <Col sm={5}>
              <Card.Text className={styles.description}>
                {description}
              </Card.Text>
            </Col>
            <Col className={styles.price}>
              <h3>{price} USD </h3>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <button className={styles.edit}>
        Edit
      </button>
    </NavLink>
  );
};

export default CardUserProduct;
