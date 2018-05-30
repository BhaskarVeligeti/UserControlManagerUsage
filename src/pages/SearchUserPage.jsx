import React, { Component } from 'react';
import logo from '../../public/images/SouthAfricanflag.png'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { userData } from '../fixtures/datatable.json'
import { UserDeleteModal, UserEditModal } from '../modal'
import '../styles/headline.css';
import '../styles/searchuser.css';



export class SearchUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      selectedUser: undefined
    };
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);

  } // end of constructor

  submitFunc = () => {
    console.log("submitFunc.....")
  }





  handleEditUser = (id) => {
    return (e) => {
      this.setState({ isEditable: true })
      this.setState(() => ({ selectedUser: id }))  // override the previous value
      console.log(`userid:${id}`)

    }
  }

  buttonFormatterEdit(cell, row, enumObject, rowIndex) {
    return (
      <button type="button" className="btn btn-sm btn-outline-success" data-toggle="tooltip" data-placement="top" title="Edit"
        onClick={this.handleEditUser(row.id)}>
        <i className="fa fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
    )
  }

  buttonFormatterDelete = (cell, row, enumObject, rowIndex) => {
    return (
      <button type="button" className="btn btn-sm btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Delete"
        onClick={this.handleDeleteUser(row.id)}>
        <i className="fa fa fa-trash" aria-hidden="true"></i>
      </button>
    )
  }

  handleDeleteUser = (id) => {
    return (e) => {
      this.setState(() => ({ selectedUser: id, isEditable: false }))  // override the previous value
      console.log(`userid:${id}`)
      // if (confirm(`(It's a custom confirm)Are you sure you want to delete UserId : ${id}?`)) {
      //     // If the confirmation is true, call the function that
      //     this.props.dispatch(userActions._delete(id));

      // }

    }
  }



  handleOpenModal = () => {
    // If the confirmation is true, call the function that
    // this.props.dispatch(userActions._delete(this.state.selectedUser));
    this.setState(() => ({ selectedUser: undefined }))  // override the previous value

  }


  handleCloseModal = () => {
    this.setState(() => ({ selectedUser: undefined }))  // override the previous value

  }


  createCustomClearButton = (onClick) => {
    return (
      <button className='btn btn-outline-primary' onClick={onClick}>Clean</button>
    );
  }

  renderShowsTotal = (start, to, total) => {
    return (
      <p style={{ color: 'blue' }}>
        From {start} to {to}, totals is {total}&nbsp;&nbsp;
    </p>
    );
  }

  salaryFormatter = (cell, row) => {
    return `<i className="fa fa fa-money" aria-hidden="true"></i> ${cell}`;
  }




  render() {

    console.log("Search User Page.....")

    const selectRowProp = {
      mode: 'radio', //radio or checkbox
      clickToSelect: true,
      hideSelectColumn: true,
      columnWidth: '40px',
      className: 'custom-row-select-bg'
    };

    const options = {
      clearSearch: true,
      clearSearchBtn: this.createCustomClearButton,
      page: 1,  // which page you want to show as default
      sizePerPageList: [{
        text: '10', value: 10
      }, {
        text: '25', value: 25
      }, {
        text: '35', value: 35
      }], // you can change the dropdown list for size per page
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      paginationPosition: 'bottom'  // default is bottom, top and both is all available
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
      // alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
    }

    return (

      <div>


        <main role="main" className="container pt-7">
          <div className="row">
            <div className="col-md-12">
              <div className="headline">
                <h2 className="headline heading-sm"> You're logged in with React & JWT!! </h2>
              </div>
            </div>

            <BootstrapTable
              data={userData} version='4'
              hover={true} bordered={true} condensed={true} maxHeight='520px'
              selectRow={selectRowProp}
              pagination={true} options={options}
              search={true} searchPlaceholder='input something...'
              exportCSV={true} csvFileName='table-export'
              tableHeaderClass='custom-table-header'>
              <TableHeaderColumn dataField='id' isKey={true} dataSort={true} width='40'>ID</TableHeaderColumn>
              <TableHeaderColumn dataField='firstName' dataSort={true}>First Name</TableHeaderColumn>
              <TableHeaderColumn dataField='lastName' dataSort={true}>Last Name</TableHeaderColumn>
              <TableHeaderColumn dataField='username' width='200'>User Name</TableHeaderColumn>
              <TableHeaderColumn dataField='role' >Role</TableHeaderColumn>
              <TableHeaderColumn dataField='salary' dataFormat={this.salaryFormatter} dataSort={true} >Salary</TableHeaderColumn>
              <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatterEdit.bind(this)} width='40' ></TableHeaderColumn>
              <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatterDelete.bind(this)} width='40'></TableHeaderColumn>
            </BootstrapTable>


          </div>
        </main>
        {this.state.isEditable ? <UserEditModal
          selectedUser={this.state.selectedUser}
          afterOpenModal={this.handleOpenModal}
          closeModal={this.handleCloseModal}>
        </UserEditModal> : <UserDeleteModal
          selectedUser={this.state.selectedUser}
          afterOpenModal={this.handleOpenModal}
          closeModal={this.handleCloseModal}>
          </UserDeleteModal>}


      </div>
    )
  }
} // end of SearchUserPage

