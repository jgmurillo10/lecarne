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
          <ul>
            <li>Nombres</li>
            <li>Apellidos</li>
            <li>CC</li>
            <li>Foto</li>
            <li>Fecha de vencimiento</li>
            <li>Logo Empresa</li>
            <li>Nombre Empresa</li>

          </ul>
        </div>
      </div>
    )
  }
}
export default Fields
