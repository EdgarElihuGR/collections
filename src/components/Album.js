import { Component } from 'react';
import './styles/Item.css';
import albumCover from '../img/eye-in-the-sky.jpg';

class Album extends Component {
  render() {
    const {artist, album, year, recordLabel, recordKey} = this.props;

    return (
      <div className="Item">
        <div className="Item__bg" >
          <img src={albumCover} alt="Cover"/>
          <div className="Item__details">
            <p><span className="Label">Artista:</span> {artist}</p>
            <p><span className="Label">Album:</span> {album}</p>
            <p><span className="Label">Año:</span> {year}</p>
            <p><span className="Label">Compañía:</span> {recordLabel}</p>
            <p><span className="Label">Clave:</span> {recordKey}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Album;