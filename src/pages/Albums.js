import { Component } from 'react';
import AlbumsList from '../components/AlbumsList';
import Navbar from '../components/Navbar';
import '../components/styles/Albums.css';

class Albums extends Component {
  state = {
    data: [
        {
          id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
          artist: "Freda",
          album: "Grady",
          year: "Leann_Berge@gmail.com",
          recordLabel: "Legacy Brand Director",
          recordKey: "FredaGrady22221-7573",
          imageUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
        },
        {
          id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
          artist: "Major",
          album: "Rodriguez",
          year: "Ilene66@hotmail.com",
          recordLabel: "Human Research Architect",
          recordKey: "ajorRodriguez61545",
          imageUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
        },
        {
          id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
          artist: "Daphney",
          album: "Torphy",
          year: "Ron61@hotmail.com",
          recordLabel: "National Markets Officer",
          recordKey: "DaphneyTorphy96105",
          imageUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
        }
    ]
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="Albums__header">
          <h1>Albums list</h1>
        </div>
        <div className="Albums__container">
          <div className="Albums__buttons">
            <a href="/">Nuevo Album</a>
          </div>
          <div className="Albums__list">
              <AlbumsList albums={this.state.data}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Albums;