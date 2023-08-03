/// IMPORTS

import styles from './Detail.module.css';
// STYLES
//.....
const beerInfo = {
  id: 1,
  name: "Cerveza Artesanal",
  image: "https://images.unsplash.com/photo-1600213903598-25be92abde40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29yb25hJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  type: "Artesanal",
  degreeOfAlcohol: "5.0%",
  description: "Una deliciosa cerveza artesanal.",
  qualification: 4.5,
  price: 2.5,
  stock: 50,
  presentation: "Botella",
  companyId: 123,
  status: "Disponible",
};
// DETAIL
const Detail = () => {
  

  return (
    <div className={styles.container}>
      <div className={styles.datacontainer}>
        <h1>Detail</h1>
        <h2>Nombre: {beerInfo.name}</h2>
        <h2>Tipo: {beerInfo.type}</h2>
        <h2>Graduacion alcohólica(ABV): {beerInfo.degreeOfAlcohol}</h2>
        <h2>Precio: {beerInfo.price * 520}$</h2>
        <h2>Informacion: {beerInfo.description}</h2>
        <h2>Calificacion: {beerInfo.qualification}</h2>
        <h2>Presentacion: {beerInfo.presentation}</h2>
        <h2>Estatus: {beerInfo.status}</h2>
      </div>
      <div className={styles.imagecontainer}>
        <img src={beerInfo.image} alt="" />
      </div>
    </div>
  );
};

export default Detail;