import { useState } from 'react';

const Register = () => { 
    //Estados del formulario 
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [message, setMessage] = useState('');

    //Estado para los errores 
    const [error, setError] = useState(false); 

    const validarDatos = (e) => {
        e.preventDefault(); 
    
        // Validación de campos vacíos
        if (!email.trim() || !contraseña.trim() || !confirmar.trim()) {
            setError(true); 
            setMessage('Todos los campos son obligatorios');
            return; 
        }
    
        // Validación de longitud de la contraseña
        if (contraseña.length < 6) {
            setError(true);
            setMessage('La contraseña debe tener al menos 6 caracteres');
            return;
        }
    
        // Validación de coincidencia de contraseñas
        if (contraseña !== confirmar) {
            setError(true);
            setMessage('Las contraseñas no coinciden');
            return;
        }
    
        // Si todo es correcto, mostramos el mensaje de éxito
        setError(false);
        setMessage('Formulario enviado correctamente');
    
        // Reseteamos los campos del formulario
        setEmail(''); 
        setContraseña('');
        setConfirmar('');
    };

    return (
    <>
       
       <form className="formulario" onSubmit={validarDatos}>
            {error && <p style={{ color: 'red' }}>Error: {message}</p>}
            {!error && message && <p style={{ color: 'green' }}>Éxito: {message}</p>}
        <h1 className="register"> Register </h1>
            <div className="form-group"> 
                <label>Email</label>
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    onChange={(e) => setEmail(
                    e.target.value)}
                    value={email}
                    placeholder="Ingresa tu email"
                />
            </div>
            <div className="form-group"> 
                <label>Contraseña</label>
                <input  
                    type="text" 
                    name="contraseña" 
                    className="form-control" 
                    onChange={(e) => setContraseña(
                    e.target.value)}
                    value={contraseña}
                     placeholder="Ingresa tu contraseña"
                />
            </div>
            <div className="form-group"> 
                <label>Confirmar Contraseña</label>
                <input 
                    type="text" 
                    name="confirmar" 
                    className="form-control" 
                    onChange={(e) => setConfirmar(
                    e.target.value)}
                    value={confirmar}
                      placeholder="Confirma tu contraseña"
                />
            </div>
            <button type="submit" className="btn btn-primary">
            Enviar</button> 
        </form>
    </>
    ) 
}

export default Register