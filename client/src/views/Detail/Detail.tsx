import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Detail.module.css';

interface Beer {
  id: string;
  name: string;
  image: string;
  type: string;
  degreeOfAlcohol: number;
  description: string;
  qualification: number | null;
  price: number;
  ABV: number;
  stock: number;
  presentation: string;
  status: boolean;
}

const Detail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get( `https://craftbeer.up.railway.app/product/${id}` || `https://localhost:3001product/${id}` );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
        console.error('Error fetching beer', error);
      }finally {
        // Se oculta la imagen de loading después de 3 segundos
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    };
    fetchBeer();
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.containLoading}>
        <img
          className={styles.beerLoading}
          src="https://4.bp.blogspot.com/-646VVaYA-bg/WPHrAyqN7YI/AAAAAAAADjI/7lAJmMNHpm4vCT49MlX51SBPDzlrx0MFACLcB/s1600/aa2.gif"
          alt=""
        />
      </div>
    );
  }

  if (!beer) {
    return (
      <div className={styles.notFound}>
        <div>
          ¡Producto no encontrado!
        </div>
        <Link to="/shop" aria-disabled>
          <Button variant="danger" className={styles.buttonback}>
            Volver
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6}>
          <Card className={`${styles.card} h-100 d-flex`}>
            <Card.Body className="flex-column">
              <Card.Title className={styles.title}>{beer?.name}</Card.Title>
              <Card.Text className="flex-grow-1">Description:{beer?.description}</Card.Text>
              <Card.Text className="flex-grow-1">Tipo:{beer?.type}</Card.Text>
              <Card.Text className="flex-grow-1">Presentacion:{beer?.presentation}</Card.Text>
              <Card.Text className="flex-grow-1">ABV: {beer?.ABV}%</Card.Text>
              <Card.Text className="flex-grow-1">Precio: ${beer?.price}</Card.Text>
              <Card.Text className="flex-grow-1">
                Calificacion: {beer?.qualification ?? 'No calificado'}
              </Card.Text>
              <Card.Text className="flex-grow-1">Stock:{beer?.stock} unidades</Card.Text>
              <Card.Text className="flex-grow-1">
                Estatus: {beer?.status ? 'Disponible' : 'No disponible'}
              </Card.Text>
            </Card.Body>
            <Link className={styles.link} to="/shop" aria-disabled>
                <Button className={styles.buttonback}>Volver</Button>
             </Link>
          </Card>
        </Col>
        <Col md={6} className={styles.imageContainer}>
          <img src={beer?.image} alt="" className={styles.image} />
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
