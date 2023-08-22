import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Detail.module.css';

export interface Beer {
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
  Qualifications?: string[]
}

const Detail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<Beer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://craftbeer.up.railway.app/product/${id}` || `http://localhost:3001/product/${id}`);
        setBeer(response.data);
        console.log(response.data);

      } catch (error) {
        console.log(error);
        console.error('Error fetching beer', error);
      } finally {
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
        <Button variant="danger" onClick={() => navigate(-1)} className={styles.buttonback}>
        Volver
      </Button>
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
              <Card.Text className="flex-grow-1">Description: {beer?.description}</Card.Text>
              <Card.Text className="flex-grow-1">Tipo: {beer?.type}</Card.Text>
              <Card.Text className="flex-grow-1">Presentacion: {beer?.presentation}</Card.Text>
              <Card.Text className="flex-grow-2">ABV: {beer?.ABV}%</Card.Text>
              <Card.Text className="flex-grow-1">Precio: ${beer?.price}</Card.Text>
              <Card.Text className="flex-grow-1">
                Calificacion: {beer?.qualification ?? 'No calificado'}
              </Card.Text>
              <Card.Text className="flex-grow-1">Stock:{beer?.stock} unidades</Card.Text>
              <Card.Text className="flex-grow-1">
                Estatus: {beer?.status ? 'Disponible' : 'No disponible'}
              </Card.Text>
            </Card.Body>
            <Button onClick={() => navigate(-1)} className={styles.buttonback}>
              Volver
            </Button>

          </Card>
        </Col>
        <Col md={6} className={styles.imageContainer}>
          <img src={beer?.image} alt="" className={styles.image} />
        </Col>
        {beer.Qualifications?.length ? (
          <>
            <div className={styles.review}>
              <h4>Valoraciones </h4>
              <hr></hr>
       
            </div>
          </>
        ) : (<></>)

        }

      </Row>
    </Container>
  );
};

export default Detail;
