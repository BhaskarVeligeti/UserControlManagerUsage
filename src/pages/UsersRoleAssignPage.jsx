import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../public/images/Loader.gif'
import { UsersRoleAssignView } from '@spillay/formmanager'
import { multyRoleAssignForm } from '../forms/form.json'


export class UsersRoleAssignPage extends React.Component {
  constructor(props) {
    super(props);
  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
  }

  render() {

    return (
      <div >
        <UsersRoleAssignView
          modelForm={multyRoleAssignForm}
          groups={2}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
          columns="col-md-6"
          submitFunc={this.submitFunc}
          logo={logo} >
        </UsersRoleAssignView>
      </div>

    )
  }
} // end of UsersRoleAssignPage

