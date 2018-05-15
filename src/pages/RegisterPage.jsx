import React from 'react';
import PropTypes from 'prop-types';
import LoginView from  '@spillay/formmanager'
import { loginForm } from '../forms/form.json'
// import '../styles/fm.css'
import '../styles/style.scss'

export  class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

    submitFunc = () => {
        console.log("submitFunc.....")
    }

    render() {

        return (
            <div >
            <main role="main" className="container pt-7">
              <div className="row">
                <div className="col-md-6 offset-md-4">
                  <div className="card" style={{ width: '30rem' }}>
                   
                    <div className="card-body">
                    <div className="alert alert-primary" role="alert">
                    RegisterPage!
                  </div>
                   
    
                      <hr />
                    </div>
                  </div>
    
                </div>
              </div>
            </main>
          </div>

        )
    }
} // end of RegisterPage

