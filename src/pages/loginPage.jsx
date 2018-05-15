import React from 'react';
import PropTypes from 'prop-types';
import { LoginView } from '@spillay/formmanager'
import { loginForm } from '../forms/form.json'
import logo from '../../public/images/SouthAfricanflag.png'
import '../styles/fm.css' // is it the correct place ?
import '../styles/style.scss'

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
  }

  render() {

    console.log("LoginPage.....")
    return (

      <div >
        <LoginView
          modelForm={loginForm}
          groups={1}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
          columns="col-md-12"
          submitFunc={this.submitFunc}
          logo={logo} >
        </LoginView>

      </div>




    )
  }
} // end of LoginPage

/*

 <main role="main" className="container pt-7">
          <div className="row">
            <div className="col-md-6 offset-md-4">
              <div className="card" style={{ width: '30rem' }}>

                <div className="card-body">
                <p>tesing.......</p>


                  <hr />
                </div>
              </div>

            </div>
          </div>
        </main>

  <div>
                <LoginView
                    modelForm={loginForm}
                    groups={1}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
                    columns="col-md-12"
                    submitFunc={this.submitFunc} >
                </LoginView>
            </div>
*/