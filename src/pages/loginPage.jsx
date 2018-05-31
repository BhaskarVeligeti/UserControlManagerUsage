import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BlockUi from 'react-block-ui';
import loader from '../../public/images/Loader.gif'
import logo from '../../public/images/SouthAfricanflag.png'
import { LoginView } from '@spillay/formmanager'
import { loginForm } from '../forms/form.json'
import '../styles/loginview.css';  // i want override


export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocking: false,
    };

  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
    this.setState({blocking: !this.state.blocking});
  }

  render() {

    console.log("LoginPage.....")
    return (
      <div>
      <BlockUi tag="div" blocking={this.state.blocking} 
      loader={<div ><p> <img src={loader} width="4%" /> </p> </div>}>
      <LoginView
        modelForm={loginForm}
        groups={1}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
        columns="col-md-12"
        submitFunc={this.submitFunc}
        logo={logo} >
      </LoginView>
      </BlockUi>
      </div>
    )
  }
} // end of LoginPage
