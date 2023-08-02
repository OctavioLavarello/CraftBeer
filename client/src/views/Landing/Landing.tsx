/// IMPORTS
import React, {useState} from "react";
import {  useNavigate  } from "react-router-dom";
import styles from './Landing.module.css';
// STYLES
//.....

// LANDING
const Landing = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const navigate = useNavigate ();

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };

  const handleCheckAge = () => {
    // Convertir la fecha ingresada en un objeto Date
    const dobDate = new Date(dateOfBirth);

    // Calcular la edad
    const ageDiffMs = Date.now() - dobDate.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

     // Verificar si el usuario es mayor de 18 años
     if (age >= 18) {
      // Redirigir a la página /home
      navigate('/home');
    } else {
      // Redirigir a Google
      window.location.href = 'https://www.argentina.gob.ar/salud/mental-y-adicciones/alcohol';
    }
  };

  

  return (
    <div>
      <p className={styles.whiteText}>¿Te gustaria disfrutar de una excelente cerveza artesanal?

      Primero debemos preguntarte:</p>
      <h1 className={styles.cuestion}>¿Eres mayor de edad?</h1>
      <h4 className={styles.whiteText}>¿Cual es tu fecha de nacimiento?</h4>
      <input className={styles.birdthday} type="date" value={dateOfBirth} onChange={handleDateChange}/>
      <button disabled={!dateOfBirth} onClick={handleCheckAge}>Comprobar</button>
      <p>El coonsumo de alcohol en exceso puede ser perjudicial para la salud</p>
      <p>si vas a conducir no tomes!</p>
    </div>
  );
};

export default Landing;