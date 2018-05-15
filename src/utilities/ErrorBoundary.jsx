import React, {Component} from 'react';
//When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. 

export  class ErrorBoundary extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
                error: null, 
                errorInfo: null
        }
      }

      componentDidCatch(error, errorInfo) {
          // Catch errors in any components below and re-render with error message
          this.setState({
            error: error,
            errorInfo: errorInfo
          })
          // You can also log error messages to an error reporting service here
        }
      
      
      render() {
          if (this.state.errorInfo) {
            // Error path
            return (
              <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              </div>
            );
          }
          // Normally, just render children
          return this.props.children;
        }  
      }
    
