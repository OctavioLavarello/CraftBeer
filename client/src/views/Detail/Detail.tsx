/// IMPORTS
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Detail.module.css';
// STYLES
//.....
// const beer = {
//   id: 1,
//   name: "Cerveza Artesanal",
//   image: "https://images.unsplash.com/photo-1600213903598-25be92abde40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29yb25hJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
//   type: "Artesanal",
//   degreeOfAlcohol: "5.0%",
//   description: "Una deliciosa cerveza artesanal.",
//   qualification: 4.5,
//   price: 2.5,
//   stock: 50,
//   presentation: "Botella",
//   companyId: 123,
//   status: "Disponible",
// };
// DETAIL
interface Beer {
  id: number;
  name: string;
  image: string;
  type: string;
  degreeOfAlcohol: string;
  description: string;
  qualification: number;
  price: number;
  stock: number;
  presentation: string;
  companyId: number;
  status: string;
}
const Detail = () => {
  const {idProduct} = useParams();
  const [beer, setBeer] = useState<Beer| null>(null); 
  ({});

  useEffect(()=>{
    const fetchBeer = async () =>{
      try {
        const response = await axios.get(`http://localhost:3001//product/${idProduct}`)
        setBeer(response.data)
      } catch (error) {
        console.log(error);
        console.error('Error fetching beer', error)
      }
    };
    fetchBeer();
  }, [idProduct])
  if (!beer) {
    return <div>Loading...</div>; 
  }
  return (
    <div className={styles.container}>
      <div className={styles.datacontainer}>
        <h1>Detail</h1>
        <h2>Nombre: {beer?.name}</h2>
        <h2>Tipo: {beer?.type}</h2>
        <h2>Graduacion alcohólica(ABV): {beer?.degreeOfAlcohol}</h2>
        <h2>Precio: ${beer?.price}</h2>
        <h2>Informacion: {beer?.description}</h2>
        <h2>Calificacion: {beer?.qualification}</h2>
        <h2>Presentacion: {beer?.presentation}</h2>
        <h2>Estatus: {beer?.status}</h2>
      </div>
      <div className={styles.imagecontainer}>
        <img src={beer?.image} alt="" />
      </div>
      <Link className={styles.link} to="/home">Go Back</Link>
    </div>
  );
};

export default Detail;