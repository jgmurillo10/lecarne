import React, {Component} from 'react';
import './App.css';

class Template extends Component{
  render(){
    return (
      <div>
        <div>

          <h2>Selecciona las medidas estándar</h2>
          <div className="row">
            <div className="">
              <div className="col-md-4 col-sm-6">
                <img className="img-responsive template" alt="template 1" src="http://placehold.it/300x200"></img>
              </div>
              <div className="col-md-4 col-sm-6">
                <img className="img-responsive template" alt="template 2" src="http://placehold.it/300x200"></img>
              </div>
              <div className="col-md-4 col-sm-6">
                <img className="img-responsive template" alt="template 3" src="http://placehold.it/300x200"></img>
              </div>
            </div>
            <div className="">
              <div className="col-md-4 col-sm-6">
                <img className="img-responsive template" alt="template 4" src="http://placehold.it/300x200"></img>
              </div>
              <div className="col-md-4 col-sm-6">
                <img className="img-responsive template" alt="template 5" src="http://placehold.it/300x200"></img>
              </div>
              <div className="col-md-4 col-sm-6">
                <img className="img-responsive template" alt="template 6" src="http://placehold.it/300x200"></img>
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="">
            <h2>Ó puedes personalizar tus medidas</h2>
            <div>
              <div className="form-group row">
                <label className="control-label col-sm-2" htmlFor="nombre">Ancho:</label>
                <div className="col-sm-8">
                  <input min="0" required type="number" placeholder="20" onChange={(event) => {this.setState({width: event.target.value})}} className="form-control"/>
                </div>
                <label className="control-label col-sm-2" htmlFor="nombre">cm</label>
              </div>
              <div className="form-group row">
                <label className="control-label col-sm-2" htmlFor="nombre">Alto:</label>
                <div className="col-sm-8">
                  <input min="0" required type="number" placeholder="20" onChange={(event) => {this.setState({height: event.target.value})}} className="form-control"/>
                </div>
                <label className="control-label col-sm-2" htmlFor="nombre">cm</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Template;
