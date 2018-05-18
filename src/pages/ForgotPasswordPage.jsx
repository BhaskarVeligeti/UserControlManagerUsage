import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ResetView } from '@spillay/formmanager'
import { forgotPasswordForm } from '../forms/form.json'
import logo from '../../public/images/SouthAfricanflag.png'
// import '../styles/loginview.css';  // i want override


export class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);
  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
  }

  render() {

    console.log("LoginPage.....")
    return (

      <div>
        <ResetView
          modelForm={forgotPasswordForm}
          groups={1}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
          columns="col-md-12"
          submitFunc={this.submitFunc}
          logo={logo} >
        </ResetView>
        </div>
    )
  }
} // end of ForgotPasswordPage

