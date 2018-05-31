import React, { Component } from 'react';
import logo from '../../public/images/Loader.gif'
import { Barchart,Linechart } from '../d3'
import * as buildings from '../fixtures/buildings.json'
import '../styles/headline.css';
import '../styles/chart.css';


export class DashboardPage extends React.Component {
  constructor(props) {
    super(props);


  } // end of constructor




  render() {

    // console.log(`inputData json object :${JSON.stringify(buildings)}`)

    return (

      <div>

      <main role='main' className='container pt-7'>
      <div className='row'>
      <div className='col-auto mb-3'>
        <div className='card' style={{height: '420px'}}>
          <div className='card-header'>
            <img src={logo} className='img-responsive' style={{width: '2.1%'}} /> <code>Build a dynamic barchart.</code>
          </div>
          <div className='card-body'>
            <Barchart inputData="staticdata/buildings.json"  width='500' height='400' xAxisTextRotation="-45" xLabel="The world's tallest buildings" yLabel="Height (m)"  ticksFormat="m" fill="orange"/>
          </div>
        </div>
      </div>
      <div className='col-auto mb-3'>
      <div className='card' style={{height: '420px'}}>
        <div className='card-header'>
          <img src={logo} className='img-responsive' style={{width: '2.1%'}} /> <code>Build a dynamic barchart.</code>
        </div>
        <div className='card-body'>
          <Barchart inputData="staticdata/revenues.json"  width='500' height='400'  xLabel="Month" yLabel="Revenue ($)"  ticksFormat="$" isCurrency="yes" fill="grey"/>
        </div>
      </div>
    </div>
    </div>
    <hr/>

      <div className='row'>
      <div className='col-md-12'>
        <div className='card' style={{height: '600px'}}>
          <div className='card-header'>
            <img src={logo} className='img-responsive' style={{width: '2.1%'}} /> <code>Build a dynamic Linechart.</code>
          </div>
          <div className='card-body'>
          <Linechart inputData="staticdata/sharemarket.json" ticksFormat="$" isCurrency="yes"/>
          </div>
        </div>
      </div>
      </div>

      <hr/>
      </main>



      </div>
    )
  }
} // end of DashboardPage

