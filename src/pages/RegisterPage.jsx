import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../public/images/Loader.gif'
import { RegisterView } from '@spillay/formmanager'
import { registrationForm } from '../forms/form.json'


export class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
  }

  render() {

    return (
      <div >
        <RegisterView
          modelForm={registrationForm}
          groups={2}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
          columns="col-md-6"
          submitFunc={this.submitFunc}
          logo={logo} >
        </RegisterView>
      </div>

    )
  }
} // end of RegisterPage

