import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Timer} from '../../utilities';
// import { UserLogoutModal } from '../../Modal'
import logo from '../../../public/images/Loader.gif'


export class Header extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="landingNav">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" /> {'Intelligent Monitor'}
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>

          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className='nav-link' ><i className="fa fa fa-home"></i> Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard" className='nav-link'><i className="fa fa fa-dashboard"></i> Dashboard </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/search" className='nav-link'><i className="fa fa fa-search"></i> Search </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/reactd3" className='nav-link'  > <i className="fa fa fa-bar-chart"></i> ReactD3</NavLink>
              </li>

              <li className="nav-item dropdown">

                <NavLink to="/expensify" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Expensify
        </NavLink>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/expensify" className="dropdown-item" >Expense</NavLink>
                  <NavLink to="/addexpense" className="dropdown-item" >Add Expense</NavLink>
                  <NavLink to="/editexpense" className="dropdown-item" >Edit Expense</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink to="/dashboardexpenses" className="dropdown-item" >Expenses Dashboard</NavLink>
                </div>
              </li>




            </ul>
           

          </div>
        </nav>
      </div>
    )
  }

}
