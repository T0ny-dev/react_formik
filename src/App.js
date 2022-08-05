import React from 'react';
import Form from './Form/Form';
import './App.css'
import Boostrasp from './componentsBoostrap/Boostrap';


function App() {
  return (
    <div className="App">
      <h2>Furmulario desde cero</h2>
      <Form/>
      <h2> FORMIK, frameworks CSS</h2>
      <Boostrasp/>
    </div>
  );
}

export default App;
