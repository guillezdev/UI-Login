import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const inputType = showPassword ? "text" : "password";
  return (
    <section className='login'>
      <div className='login-text'>
        <h6>EMPIEZA GRATIS</h6>
        <h1>Iniciar sesión</h1>
        <p>
          ¿No tienes una cuenta? <span>Registrarse</span>
        </p>
      </div>
      <form autocomplete='off' className='login-form'>
        <div className='input-group'>
          <input
            required
            className='input'
            type={"text"}
            id='username'
            name='username'
          />
          <span className='iconEmail'></span>
          <label className='input-pleacejolder'>Email</label>
        </div>
        <div className='input-group'>
          <input
            required
            className='input'
            type={inputType}
            id='password'
            name='password'
          />
          <span
            className={showPassword ? "iconPasswordShow" : "iconPassword"}
            onClick={handleShowPassword}
          ></span>
          <label className='input-pleacejolder'>Contraseña</label>
        </div>
        <button className='btn__login' type='submit'>
          Iniciar sesión
        </button>
        <span>¿Olvidaste tu contraseña?</span>
      </form>
      <div className='social-login'>
        <button className='btn__google'>
          <span className='iconGoogle'></span>
          INICIAR SESIÓN CON GOOGLE
        </button>
        <button className='btn__facebook'>
          <span className='iconFacebook'></span>
          INICIAR SESIÓN CON FACEBOOK
        </button>
      </div>
    </section>
  );
};
export default Login;
