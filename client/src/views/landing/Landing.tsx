/// IMPORTS
import React, {useState} from "react";
import {  useNavigate  } from "react-router-dom";
import  InstagramIcon  from '../../assets/icons/Instagram_icon.png.webp';
import twitterIcon from '../../assets/icons/Logo_of_Twitter.svg.png'
import facebookIcon from '../../assets/icons/2021_Facebook_icon.svg.png'
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

  const handleBlur = () => {
    handleCheckAge(); // Llamar a la función handleCheckAge cuando el campo pierde el foco
  };

  return (
    <div>
      <p>¿Te gustaria disfrutar de una excelente cerveza artesanal?</p>
      <p>Primero debemos preguntarte:</p>
      <h1>¿Eres mayor de edad?</h1>
      <h4>¿Cual es tu fecha de nacimiento?</h4>
      <label>Fecha de nacimiento:</label>
      <input type="date" value={dateOfBirth} onChange={handleDateChange} onBlur={handleBlur}/>
      <p>El coonsumo de alcohol en exceso puede ser perjudicial para la salud</p>
      <p>si vas a conducir no tomes!</p>
      <p>El expendio de bebidas alcoholicas se encuentra prohibido para menores de 18 años.

        Si no cumples con estas especificaciones te recomendamos no continuar el proceso de compra en esta plataforma.
      </p>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" width="40" height="40" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="twitter" width="40" height="40" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="facebook" width="40" height="40" />
        </a>
        <h2>Nuestras redes</h2>
    </div>
  );
};

export default Landing;