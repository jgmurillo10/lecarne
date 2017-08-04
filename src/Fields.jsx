import React, {Component} from 'react';
import './App.css';

class Fields extends Component{
  render(){
    return (
      <div>
        <div>
          <h2>
            Por Favor selecciona los campos que deseas agregar a tu carné
          </h2>
          <input type="checkbox" name="vehicle" value="name"/>Nombres<br/>
          <input type="checkbox" name="vehicle" value="lastname"/>Apellidos<br/>
          <input type="checkbox" name="vehicle" value="id"/>CC<br/>
          <input type="checkbox" name="vehicle" value="pic"/>Foto<br/>
          <input type="checkbox" name="vehicle" value="birth"/>Fecha de vencimiento<br/>
          <input type="checkbox" name="vehicle" value="co_logo"/>Logo Empresa<br/>
          <input type="checkbox" name="vehicle" value="co_name"/>Nombre Empresa<br/>

        </div>
      </div>
    )
  }
}
export default Fields;
