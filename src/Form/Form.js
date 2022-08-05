import React from 'react';
import Loader from '../Loader/Loader';
import { LogicalForm } from './LogicalForm';

const InitialForm = {
  email:"",
  idDiscord:"",
}
const validationsForm = (form) => {
  let errors = {};
  
  let regexpEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexIdDiscord =/^.{1,18}$/;

  if(!form.email.trim()){
    errors.email = "El campo de 'email' es requerido";
  } else if (!regexpEmail.test(form.email.trim())) {
    errors.email = "El campo de 'email' es incorrento";
  }

  if(!form.idDiscord){
    errors.idDiscord = "El campo de 'id discord' es requerido";
  } else if (!regexIdDiscord.test(form.idDiscord)) {
    errors.idDiscord = "El campo de 'id discord' solo debe contener 18 caracteres";
  } else if (form.idDiscord.length < 18){
    errors.idDiscord = "Recuerda que el 'id discord' debe ser igual a 18 caracteres";
  }

  return errors;
}

const Form = ()=> {
  const {
    form,
    errors,
    loading,
    response,
    handlechange2,
    handleBlur,
    handleSubmit2
  } = LogicalForm(InitialForm, validationsForm)
  return (
    <div>
      <h2>Formulario de Sesion</h2>
      <form onSubmit={handleSubmit2 }>
        {errors.email && <p className='form__alert'>{errors.email}</p>}
        <input 
        type="email"
        name='email' 
        placeholder='Escribe tu email'
        onBlur={handleBlur}
        onChange={handlechange2}
        value= {form.email}
        required
        />
        {errors.idDiscord && <p className='form__alert'>{errors.idDiscord}</p>}
        <input 
        type="number"
        name='idDiscord' 
        placeholder='Escribe tu ID discord'
        onBlur={handleBlur}
        onChange={handlechange2}
        value= {form.idDiscord}
        required
        />
        <input 
        type="submit"
        value="submit"
        />
      </form>
      {loading  && <Loader/>}
      {response && alert("los datos han sido enviados")}
    </div>
  );
}

export default Form;