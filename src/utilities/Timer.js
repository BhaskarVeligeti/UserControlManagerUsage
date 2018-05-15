import React from 'react';

export class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(),redirectToReferrer: false};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      tick() {
        this.setState({
          date: new Date()
        });
      }

      render() {
        return (
          <div>
                
             
                <div className="row">
                <div className="col-md-12 ml-auto">
                <h6>
                 <code>{new Date().toLocaleTimeString()}</code></h6>
               
                </div>
                </div>
               
               
            </div>
        );
      }
    };
