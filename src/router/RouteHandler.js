/*
Application Route centralised configuration
*/

import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from '../helpers'
import { PublicRoute } from '../router'
import {DragAndDropPage} from '../dragdrop'
import { 
  LoginPage, 
  RegisterPage,
  NotFoundPage,
  ForgotPasswordPage,
  UsersRoleAssignPage,
  SearchUserPage ,
  DashboardPage
} from '../pages'



export class RouteHandler extends React.Component {
  constructor(props) {
    super(props)

  }

  // componentDidMount() {
  //   $('[data-toggle="tooltip"]').tooltip();
  // }

  // componentDidUpdate() {
  //   $('[data-toggle="tooltip"]').tooltip();
  // }


  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path='/login' component={LoginPage} />
            <PublicRoute path='/register' component={RegisterPage} />
            <PublicRoute  path='/forgotpassword' component={ForgotPasswordPage} />
            <PublicRoute  path='/usersrole' component={UsersRoleAssignPage} />
            <PublicRoute  path='/search' component={SearchUserPage} />
            <PublicRoute  path='/dashboard' component={DashboardPage} />
            <PublicRoute  path='/dd' component={DragAndDropPage} />
            <PublicRoute component={NotFoundPage} path="/" />
          </Switch>
        </div>
      </Router>

    )
  }


} // end of RouteHandler
