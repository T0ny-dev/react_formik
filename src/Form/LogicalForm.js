import { useState } from 'react';
import { helpHttp } from '../HelperHTTPS/helpHTTPS';

export const LogicalForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handlechange2 = (e) => { 
    const{name, value} = e.target;
    setForm({
      ...form,
      [name]:value,
    });
  };

  const handleBlur = (e) => { 
    handlechange2(e);
    setErrors(validateForm(form));
  }

  const handleSubmit2 = (e) => { 
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0) {
      alert("Enviando formulario")
      setLoading(true)
      helpHttp()
        .get('https://larnu-api-upy5mhs63a-rj.a.run.app/api/v1/bootcamp/profile',{
        headers:{
          'Email': form.email,
          'Discord-Id': form.idDiscord
        },
        })
        .then((res)=>{
          setLoading(false);
          setResponse(true);
          console.log(res);
        })
    }else {

      return;
    }
  }

  /*hook personalizado recibe objeto*/
  return {
    form,
    errors,
    loading,
    response,
    handlechange2,
    handleBlur,
    handleSubmit2
  }
};