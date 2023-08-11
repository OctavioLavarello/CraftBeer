import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from "./User.module.css"
/// IMPORTS
//.....
// STYLES
//.....
const userPerson ={ 
    id: 1,
    name:"Agustin",
    lastName:"Rosa",
    document:45722593,
    email: "Agustinrosa1234@gmail.com",
    password: "A1x2345678",
    country: "Argentina",
    city:"Mendoza",
    state:"Dorrego",
    address:"calle 25 N° 15 20",
    image:"https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2018/11/17/2047068.jpg",
    status: true,
    role: "Person"
}
// USER
const User = () => {
  return (
    <Container>
      <Row className={styles.Columna}>
        <Col>
        <Card>
          <Card.Body>
            <Card.Title>MIS DATOS PERSONALES!!!</Card.Title>
            <Card.Text>Nombre: {userPerson?.name}</Card.Text>
            <Card.Text>Apellido: {userPerson?.lastName}</Card.Text>
            <Card.Text>Email: {userPerson?.email}</Card.Text>
            <Card.Text>Documento: {userPerson?.document}</Card.Text>
            <Card.Text>País: {userPerson?.country}</Card.Text>
            <Card.Text>Ciudad: {userPerson?.city}</Card.Text>
            <Card.Text>Estado: {userPerson?.state}</Card.Text>
            <Card.Text>Calle: {userPerson?.address}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card.Title>MI HISTORIAL DE COMPRA!!!</Card.Title>
        </Col>
      </Row>
    </Container>
  );
};

export default User;