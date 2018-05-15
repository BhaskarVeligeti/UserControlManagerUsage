/*
Application Route centralised configuration
*/

import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from '../helpers'
import { PublicRoute } from '../router'
import { LoginPage, RegisterPage,NotFoundPage } from '../pages'


export class RouteHandler extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  }


  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path='/login' component={LoginPage} />
            <PublicRoute path='/register' component={RegisterPage} />
            <PublicRoute component={NotFoundPage} path="/" />
          </Switch>
        </div>
      </Router>

    )
  }


} // end of RouteHandler
