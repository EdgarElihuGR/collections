import { Component } from 'react';
import './styles/Item.css';
import albumCover from '../img/eye-in-the-sky.jpg';

class Album extends Component {
  render() {
    return (
      <div className="Item">
        <div className="Item__bg" >
          <img src={albumCover} alt="Cover"/>
          <div className="Item__details">
            <p><span className="Label">Artista:</span> Alan Parsons Project</p>
            <p><span className="Label">Album:</span> Eye in the sky</p>
            <p><span className="Label">Año:</span> 1982</p>
            <p><span className="Label">Compañía:</span> Records</p>
            <p><span className="Label">Clave:</span> 12345</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Album;