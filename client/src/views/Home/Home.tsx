/// IMPORTS
import React, { useState } from "react";
// COMPONENTS
import MiniCard from "../../components/miniCard/MiniCard";
// STYLES
import styles from "./Home.module.css";

// HOME
const Home: React.FC = () => {
  // LOCAL STATES
  const [img, SetImg] = useState<Array<string>>([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GjjU0K8G0_yyogG3NQRRmpFYXIs_JBL_RCwyQUfTk1vP5OO49rpDI-JWOgBD_D3fuio&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/N%C3%BAmero_2.svg/768px-N%C3%BAmero_2.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/N%C3%BAmero_3.svg/2048px-N%C3%BAmero_3.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/N%C3%BAmero_4.svg/2048px-N%C3%BAmero_4.svg.png",
  ]);
  const [imgCurrentIndex, setImgCurrentIndex] = useState<number>(0);

  // HANLDERS
  const handlerLeft = () => {
  };
  const handlerRight = () => {};

  return (
    <div>
      <h1>HOME</h1>
      <div>
        <img src={img[imgCurrentIndex]} alt="IMAGEN 1" className={styles.img} />
        <button onClick={handlerLeft} className={styles.button}>
          ◁
        </button>
        <img
          src={img[imgCurrentIndex + 1]}
          alt="IMAGEN PRINCIPAL"
          className={styles.imgMajor}
        />
        <button onClick={handlerRight} className={styles.button}>
          ▷
        </button>
        <img
          src={img[imgCurrentIndex + 2]}
          alt="IMAGEN 3"
          className={styles.img}
        />
      </div>
      <div>
        <h2>Productos destacados</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2>Mas Vendidos</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
