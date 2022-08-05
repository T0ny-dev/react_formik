import React from 'react';
import { Formik } from 'formik';

export default function BoostrapFormc() {
return (
  <Formik

    validate={(valores)=>{
      let errores ={};
      
      if(!valores.email2){
        errores.email2 = 'porfavor ingresar un correo'
      } else if(!/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/.test(valores.email2)){
        errores.email2 = 'porfavor ingresar un correo valido'
      }
      
      if(valores.idDiscord2.length === 0){
        errores.idDiscord2 = 'porfavor ingresar un ID Discord de 18 caracteres'
      } else if(!/^.{1,18}$/.test(valores.idDiscord2)){
        errores.idDiscord2 = 'haz sobrepasado los 18 caracteres del ID Discord'
      }
      return errores;
    }}
    
    initialValues={{
      email2:"",
      idDiscord2:""
    }}

    onSubmit={(valores) =>{
      console.log(valores)
      console.log('enviando archivo')
    }}
    >
    {({values, handleSubmit, handleChange, handleBlur, errors})=> (
      <form onSubmit={handleSubmit}>
        
      <div className="mb-3">
        <label  className="form-label">Email address</label>
        
        <input 
        type="email" 
        className="form-control" 
        name="email2" 
        aria-describedby="emailHelp" 
        value={values.email2}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.email2 && <p className='form__alert'>{errors.email2}</p>}

        
      </div>
      <div className="mb-3">
        <label  className="form-label">ID discord</label>
        
        <input 
        type="number" 
        className="form-control" 
        name="idDiscord2" 
        value={values.idDiscord2}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.idDiscord2 && <p className='form__alert'>{errors.idDiscord2}</p>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )}
    
  </Formik>

);
}