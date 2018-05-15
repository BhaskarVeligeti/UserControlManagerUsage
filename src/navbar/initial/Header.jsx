import React from 'react';
import {Timer} from '../../utilities';
// import logo from '../../../public/images/favicon.png';
import logo from '../../../public/images/Loader.gif'


// Stateless functional components

//scope : take props as an argument and return the element you want to render.
// When should you use this syntax? : Specifically, whenever you don't need state or the component lifecycle methods (e.g. componentDidMount). 
// No members, no state, no lifecycle hooks, no multiple moving parts. This means they’re simpler to understand and less prone to bugs.
//You can use all of the functional approaches & techniques and apply them to the UI


export const Header = (props) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="landingNav">
      <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" /> {props.brand}
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        
        <span className="navbar-toggler-icon"></span>
 
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" title={props.label}>
            <a className="nav-link">
              <span className="nav-link-text userLabel" >{props.label}</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link">
              <span className="nav-link-text"><Timer /></span>
              
            </a>
            
          </li>
        </ul>

      </div>
    </nav>
  </div>
);
Header.defaultProps = {
  brand: 'Intelligent Monitor',
  label: "Hello,It is"
}

