import React, { Fragment } from "react";

//Styles
import "./Form.scss";

const Form = () => {
  return (
    <Fragment>
      <div className="form-container">
        <h2 className="form-title">Formulario de registro</h2>
        <form className="form-inputs">
          <label htmlFor="nombre">
            <input name="nombre" type="text" placeholder="Nombre" />
          </label>
          <label htmlFor="apellido">
            <input name="apellido" type="text" placeholder="Apellido" />
          </label>
          <label htmlFor="email">
            <input name="email" type="email" placeholder="E-mail" />
          </label>
          <label htmlFor="phone">
            <input name="phone" type="phone" placeholder="Telefono" />
          </label>
          <label htmlFor="password">
            <input name="password" type="password" placeholder="Password" />
          </label>
          <label htmlFor="repassword">
            <input
              name="repassword"
              type="password"
              placeholder="Confirmar Password"
            />
          </label>
          <button className="btnRegistrar" type="submit">
            Registrar Usuario
          </button>
        </form>
      </div>
      ;
    </Fragment>
  );
};

export default Form;
