import React, { Component } from 'react'
import * as d3 from 'd3'

/*
step 1:
set the dimensions and margins of the graph

step 2:
define promise : The Promise object represents the eventual completion (or failure) of an asynchronous
 operation, and its resulting value.
 with json data

step 3:
svg canvas select

step 4:
add group and margins 

step 5:
rectangles  : x axis
height of rectangle  :  y- axis 

step 6:
add svg onto a selection

step 7:
axis generators
    x - axis
    y - axis

step 8:
labels
*/

export class Barchart extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(`inputData json object :${JSON.stringify(this.props.inputData)}`)
        this.setContext();
    }


    setContext = () => {
        // console.log(`inputData json object :${JSON.stringify(this.props.inputData)}`)
        // cnost { width,height,inputData,xLabel,yLabel,ticks,ticksFormat } = this.props
        // console.log(`this.props.tickFormat :${this.props.ticksFormat}`)
        // step 1:
        const margin = { left: 65, right: 10, top: 10, bottom: 150 }
        const width = this.props.width - margin.left - margin.right;
        const height = this.props.height - margin.top - margin.bottom;
        const json = this.props.inputData;


              // step 3:
              const svg = d3.select(this.refs.barchart).append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)

          // step 4:
          const g = svg.append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


        // const json ={...this.props.inputData}
        // const json = Object.assign({}, this.props.inputData);
        // const json = this.props.inputData.reduce((json, value, key) => { 
        //     // console.log(`value :${value} - key :${key}`)
        //     json[key] = value; 
        //     console.log(`json :${JSON.stringify(json)}`)
        //     return json; 
        // }, {});

        // step 2:"staticdata/buildings.json"
        d3.json(json).then((data) => {  // resolve
            data.map((d) => {
                d.yValue = +d.yValue; // convert into integer
                // console.log(`name :${d.name} - height:${d.height}`)
            })

      

            // step 6:
            const x = d3.scaleBand()
                .domain(data.map((d) => d.xValue))
                .range([0, width])
                .paddingInner(0.5)
                .paddingOuter(0.5)

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, (d) => d.yValue)])
                .range([height, 0])



            // step 7:
            // x - axis
            const xAxisCall = d3.axisBottom(x);
            g.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .attr("class", "axisX")
                .call(xAxisCall)
                .selectAll("text")
                .attr("class", "axisX")
                .attr("y", "10")
                .attr("x", this.props.xAxisTextRotation ? +this.props.xAxisTextRotation : 0)
                .attr("text-anchore", "end")
                .attr("transform", "rotate(" + (this.props.xAxisTextRotation ? +this.props.xAxisTextRotation : 0) + ")");
            // y - axis
            const yAxisCall = d3.axisLeft(y)
                .tickFormat((d) => this.props.isCurrency ? (this.props.ticksFormat) + d : d + (this.props.ticksFormat));
            g.append("g")
                .attr("class", "y-axis")
                .attr("class", "axisY")
                .call(yAxisCall)


            // step 8:
            // X Label
            g.append("text")
                .attr("class", "x axix-label")
                .attr("transform", "translate(" + (width / 2) + " ," + (height + (this.props.xAxisTextRotation ? +90 : +50)) + ")")
                .attr("font-size", "15px")
                .style("text-anchor", "middle")
                .text(this.props.xLabel);

            // Y Label
            g.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - (height / 2))
                .attr("dy", "1em")
                .attr("class", "y axix-label")
                .attr("font-size", "13px")
                .style("text-anchor", "middle")
                .text(this.props.yLabel);

            // step 6:
            const barchart = g.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", (d) => x(d.xValue))
                .attr("y", (d) => y(d.yValue))
                .attr("width", x.bandwidth)
                .attr("height", (d) => height - y(d.yValue))
                .attr("fill", (d) => this.props.fill)

            return barchart

        }).catch((error) => { // reject 
            console.log(`error :${error}`)
        })
    }


    render() {
        return (

            <div ref='barchart'></div>


        )
    }

}
