import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Header, Footer } from '../navbar/initial'
/*
The react private route component renders a route component if the user is logged in, 
otherwise it redirects the user to the /login page.
The way it checks if the user is logged in is by checking that there is a user object in local storage.
...rest // variable that are not destrcture
*/

// (<Redirect to='/' />)

export const PublicRoute = ({
    component: Component,
    ...rest }) => (
        <Route {...rest} render={(props) => (
            localStorage.getItem('user') ?
              
                (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
                :
                (<div>
                    <Header />
                    <Component {...props} />
                  
                </div>)


        )} />
    )

    // this component will connect to store get the authentication of user