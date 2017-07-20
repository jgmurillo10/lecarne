import React, {Component} from 'react';
import request from 'superagent';
import './App.css';
import Template from './Template.jsx';
class Form extends Component{

  constructor(props){
    super(props);
    this.state = {
      image: ''
    };
    this.onSubmit= this.onSubmit.bind(this);
    this.onFileSelect = this.onFileSelect.bind(this);
  }

  getInitialState(){
      return {};
  }
  onFileSelect(e){
    e.preventDefault();
     let file = e.target.files[0];

       this.setState({
         image: file
       });
       console.log(this.state, 'state');
     //this.setState({image: e.target.files[0]});
     console.log('inicio send');
     console.log(this.state.image);
     console.log('fin send');
     console.log('inicio imagen');
     console.log(e.target.files[0]);
     console.log('fin imagen');
     console.log(this, 'now');
     setTimeout(function(){ console.log(this, '3sec'); }, 3000);

     console.log(this.state, 'state');
  }
  onSubmit(e){
    request.put("/upload")
            .attach("image-file", this.state.image, this.state.image.name)
            .end(function(res){
                console.log(res);
            });
        e.preventDefault();
  }
  render(){
    return (
      <div>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <hr className="style18"></hr>
          <Template/>
          <hr className="style18"></hr>

          <div>
            <h2>Selecciona una imagen</h2>
            <input type="file" name="image-file" onChange={(e)=>this.onFileSelect(e)} />
          </div>

          <input type="submit" name="submit"  onClick={(e)=>this.onSubmit(e)} />
          <hr className="style19"></hr>
        </form>
      </div>
    );
  }
}

export default Form;
