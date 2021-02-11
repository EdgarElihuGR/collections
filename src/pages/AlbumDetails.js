import { Component } from 'react';
import Navbar from '../components/Navbar';
import Album from '../components/Album';

class AlbumDetails extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Album 
          artist="Alan Parsons Project"
          album="Eye in the sky"
          year="1982"
          recordLabel="Records"
          recordKey="12345"
        />
      </div>
    )
  }
}

export default AlbumDetails;