import { Component } from 'react';
import Navbar from '../components/Navbar';
import Album from '../components/Album';
import AlbumForm from '../components/AlbumForm';

class AlbumNew extends Component {
  state = {
    form: {
      artist: '',
      album: '',
      year: '',
      recordLabel: '',
      recordKey: '',
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  render(){
    return(
      <div>
        <Navbar />
        <Album 
          artist={this.state.form.artist}
          album={this.state.form.album}
          year={this.state.form.year}
          recordLabel={this.state.form.recordLabel}
          recordKey={this.state.form.recordKey}
        />
        <AlbumForm 
          onChange={this.handleChange} 
          formValues={this.state.form}/>
      </div>
    )
  }
}

export default AlbumNew;