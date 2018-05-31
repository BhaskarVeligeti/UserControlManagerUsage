import React from 'react';
import PropTypes from 'prop-types';
import BlockUi from 'react-block-ui';
import loader from '../../public/images/Loader.gif'
import logo from '../../public/images/Loader.gif'
import { RegisterView } from '@spillay/formmanager'
import { registrationForm } from '../forms/form.json'


export class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocking: false,
    };
  } // end of constructor

  submitFunc = (res) => {
    console.log("submitFunc.....",res)
    this.setState({ blocking: !this.state.blocking });
  }

  render() {

    return (
      <div>
        <BlockUi tag="div" blocking={this.state.blocking}
          loader={<div ><p> <img src={loader} width="4%" /> </p> </div>}>
          <RegisterView
            modelForm={registrationForm}
            groups={2}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
            columns="col-md-6"
            submitFunc={this.submitFunc}
            logo={logo} >
          </RegisterView>
        </BlockUi>
      </div>

    )
  }
} // end of RegisterPage

