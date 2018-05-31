import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../public/images/Loader.gif'
import { UsersRoleAssignView } from '@spillay/formmanager'
import { multyRoleAssignForm } from '../forms/form.json'
import BlockUi from 'react-block-ui';
import loader from '../../public/images/Loader.gif'

export class UsersRoleAssignPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocking: false,
    };
  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
    this.setState({ blocking: !this.state.blocking });

  }

  render() {

    return (
      <div >
        <BlockUi tag="div" blocking={this.state.blocking}
          loader={<div ><p> <img src={loader} width="4%" /> </p> </div>}>
          <UsersRoleAssignView
            modelForm={multyRoleAssignForm}
            groups={2}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
            columns="col-md-6"
            submitFunc={this.submitFunc}
            logo={logo} >
          </UsersRoleAssignView>
        </BlockUi>
      </div>

    )
  }
} // end of UsersRoleAssignPage

