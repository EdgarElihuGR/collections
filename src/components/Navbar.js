import { Component } from 'react';
import logo from '../img/vinyl.png';
import './styles/Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="Navbar">
        <div className="Logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="Menu">
          <a href="/">Albums</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;