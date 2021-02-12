import { Component } from 'react';
import './styles/AlbumForm.css';

class AlbumForm extends Component {

  state = {};

  handleClick = e => {
    console.log('Form button clicked');
  }

  render() {
    return(
      <div className="AlbumForm">
        <h2>Nuevo Album</h2>
        <form>
          <div className="InGroup">
            <label htmlFor="artist">Artista</label>
            <input onChange={this.props.onChange} type="text" name="artist" value={this.props.formValues.artist}/>
          </div>
          <div className="InGroup">
            <label htmlFor="album">Album</label>
            <input onChange={this.props.onChange} type="text" name="album" value={this.props.formValues.album}/>
          </div>
          <div className="InGroup">
            <label htmlFor="year">Año</label>
            <input onChange={this.props.onChange} type="date" name="year" value={this.props.formValues.year}/>
          </div>
          <div className="InGroup">
            <label htmlFor="recordLabel">Compañía</label>
            <input onChange={this.props.onChange} type="text" name="recordLabel" value={this.props.formValues.recordLabel}/>
          </div>
          <div className="InGroup">
            <label htmlFor="recordKey">Clave</label>
            <input onChange={this.props.onChange} type="text" name="recordKey" value={this.props.formValues.recordKey}/>
          </div>
          <button onClick={this.handleClick} type="button">Agregar</button>
        </form>
      </div>
    )
  }
}

export default AlbumForm;