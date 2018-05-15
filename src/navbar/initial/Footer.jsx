
// Stateless functional components

//scope : take props as an argument and return the element you want to render.
// When should you use this syntax? : Specifically, whenever you don't need state or the component lifecycle methods (e.g. componentDidMount). 
// No members, no state, no lifecycle hooks, no multiple moving parts. This means they’re simpler to understand and less prone to bugs.
//You can use all of the functional approaches & techniques and apply them to the UI

import React from 'react';


export const Footer = (props) => (
    <div className="content-wrapper">
        <div >
            <footer className="footer">
                <div className="container text-md-center">
                    <small  className="text-muted font-italic ">&copy; {props.footerName}</small>
                </div>
            </footer>
        </div>
    </div>
);
Footer.defaultProps = {
    footerName: '2018 Bhaskar Veligeti.'
}
