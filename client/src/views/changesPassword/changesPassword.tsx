import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from './changesPassword.module.css';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!errors.email) {
        try {
      const response = await axios.post('/forgetpassword', { email });
      if (response.status === 200) {
        setSuccessMessage('Se ha enviado un código de verificación a tu correo electrónico');
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Error al enviar el código de verificación. Correo electrónico no encontrado.');
      console.error(error);
    }
  }
};

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    if (!errors.email && !errors.password) {
        try {
          const response = await axios.put('/newpassword', { email, code, newPassword });
          if (response.status === 200) {
            setSuccessMessage('Contraseña cambiada exitosamente');
            setErrorMessage('');
            // Redirigir a una página de inicio de sesión u otra página relevante
            navigate('/login');
          }
        } catch (error) {
          setErrorMessage('Error al cambiar la contraseña. Código incorrecto o inesperado.');
          console.error(error);
        }
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let errorMessage = '';
      
        if (name === 'email') {
          if (value !== '') {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
              errorMessage = 'Correo electrónico inválido';
            }
          } else {
            errorMessage = 'Información requerida';
          }
        } else if (name === 'password') {
          if (value !== '') {
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)) {
              errorMessage = 'La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener más de 8 caracteres.';
            }
          } else {
            errorMessage = 'Información requerida';
          }
        }
      
        setErrors({ ...errors, [name]: errorMessage });
      };
  
      return (
        <div className={styles.container}>
          <h2 className={styles.titulo}>Cambio de Contraseña</h2>
          <Form onSubmit={handleEmailSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleInputChange(e);
                }}
              />
              {errors.email && <Alert variant="danger">{errors.email}</Alert>}
            </Form.Group>
            <Button className={styles.button} type="submit">Enviar Código de Verificación</Button>
          </Form>
          <Form onSubmit={handleFormSubmit}>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form.Group controlId="code">
              <Form.Label>Código de Verificación</Form.Label>
              <Form.Control
                type="number"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  handleInputChange(e);
                }}
              />
              {errors.password && <Alert variant="danger">{errors.password}</Alert>}
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirmar Nueva Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button className={styles.button} type="submit">Cambiar Contraseña</Button>
            <Button onClick={() => navigate(-1)} className={styles.button}>
              Volver
            </Button>
          </Form>
        </div>
      );
    };
    

export default ResetPasswordPage;
