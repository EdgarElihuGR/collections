import { Component } from 'react';
import '../components/styles/AlbumsList.css';

class AlbumsList extends Component {
  render(){
    return(
      <ul className="UnstyledList">
        {this.props.albums.map((album) => {
          return (
            <li className="Album__item">
              <p>{album.artist}</p>
              <p>{album.year}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default AlbumsList;