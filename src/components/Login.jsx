import React, { useState } from 'react';

const Login = () => {
  // Estados del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estado para los errores
  const [error, setError] = useState(false);

  // Estado para el mensaje
  const [message, setMessage] = useState('');

  // Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!email.trim() || !password.trim()) {
      setError(true);
      setMessage('Todos los campos son obligatorios');
      return;
    }

    // Validación de longitud de la contraseña
    if (password.length < 6) {
      setError(true);
      setMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    if (email === 'test@example.com' && password === 'password') {
      setError(false);
      setMessage('Inicio de sesión exitoso');
    } else {
      setError(true);
      setMessage('Email o contraseña incorrectos');
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p className="error">Error: {message}</p>}
        {!error && message && <p className="success">Éxito: {message}</p>}
        <h1 className="login">Login</h1>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ingresa tu email"
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </>
  );
};

export default Login;