import React from 'react';
import PropTypes from 'prop-types';
import LoginView from  '@spillay/formmanager'
import { loginForm } from '../forms/form.json'
import '../styles/fm.css'
import '../styles/style.scss'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("submitFunc.....")
    } // end of constructor

    submitFunc = () => {
        console.log("submitFunc.....")
    }

    render() {

        return (
            <div>
                <LoginView
                    modelForm={loginForm}
                    groups={1}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
                    columns="col-md-12"
                    submitFunc={this.submitFunc} >
                </LoginView>
            </div>

        )
    }
} // end of LoginPage

