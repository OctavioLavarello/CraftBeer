import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  ABV: number,
  stock: number;
  presentation: string;
  status: boolean;
}

const Detail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product/${id}`);
        setBeer(response.data);
      } catch (error) {
        console.log(error);
        console.error('Error fetching beer', error);
      }
    };
    fetchBeer();
  }, [id]);

  if (!beer) {
    return <div>Loading...</div>;
  }
console.log(beer);

  return (
    <div className={styles.container}>
      <div className={styles.datacontainer}>
        <h1>Detail</h1>
        <h2>Nombre: {beer?.name}</h2>
        <h2>Tipo: {beer?.type}</h2>
        <h2>Graduacion alcohólica(ABV): {beer?.ABV}%</h2>
        <h2>Precio: ${beer?.price}</h2>
        <h2>Informacion: {beer?.description}</h2>
        <h2>Calificacion: {beer?.qualification}</h2>
        <h2>Presentacion: {beer?.presentation}</h2>
        <h2>Estatus: {beer?.status ? 'Disponible' : 'No disponible'}</h2>
        <Link className={styles.link} to="/home">Go Back</Link>
      </div>
      <div className={styles.imagecontainer}>
        <img src={beer?.image} alt="" />
      </div>
    </div>
  );
};

export default Detail;