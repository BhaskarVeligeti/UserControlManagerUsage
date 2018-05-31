import React, { Component } from 'react'
import * as d3 from 'd3'


 export class Linechart extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log(`inputData json object :${JSON.stringify(this.props.inputData)}`)
        this.setContext();
    }

    setContext = () => {

        // set the dimensions and margins of the graph
        const margin = { top: 20, right: 20, bottom: 50, left: 70 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        const json = this.props.inputData;

        // parse the date / time
        const parseTime = d3.timeParse("%d-%b-%y");
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin

        const svg = d3.select(this.refs.linechart).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

        const g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Get the data
        d3.json(json).then((data) => {  // resolve

            // format the data
            data.map((d) => {
                d.date = parseTime(d.date)
                d.close = +d.close
            });


            // X scale will use the index of our data
            const xScale = d3.scaleTime()
                .domain(d3.extent(data, (d) => d.date))  // input
                .range([0, width]);  // output

            // Y scale will use the  close number
            const yScale = d3.scaleLinear()
                .domain(d3.extent(data, (d) => d.close)) // input
                // .domain([0, d3.max(data, (d) => d.close)])
                .range([height, 0]); // output


            // d3's line generator
            const line = d3.line()
                .x((d, i) => xScale(d.date))  // set the x values for the line generator
                .y((d) => yScale(d.close)) // set the y values for the line generator 
                .curve(d3.curveMonotoneX) // apply smoothing to the line


            const xAxisCall = d3.axisBottom(xScale);  // Create an axis component with d3.axisBottom
            //Call the x axis in a group tag
            g.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .attr("class", "axisX")
                .call(xAxisCall)
                .attr("class", "axisX")

            const yAxisCall = d3.axisLeft(yScale) // Create an axis component with d3.axisLeft
            .tickFormat((d) => this.props.isCurrency ? (this.props.ticksFormat) + d : d + (this.props.ticksFormat));
            // Call the y axis in a group tag
            g.append("g")
                .attr("class", "y axis")
                .attr("class", "axisY")
                .call(yAxisCall)


            // text label for the x axis
            g.append("text")
                .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
                .style("text-anchor", "middle")
                .text("Date");

            // text label for the y axis
            g.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - margin.left)
                .attr("x", 0 - (height / 2))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("Value ($)");

            //  Append the path, bind the data, and call the line generator 
            g.append("path")
                .datum(data) //Binds data to the line 
                .attr("class", "line")
                .attr("d", line); //Calls the line generator

            // 12. Appends a circle for each datapoint 
            const linechart = g.selectAll(".dot")
                .data(data)
                .enter()
                .append("circle") // Uses the enter().append() method
                .attr("class", "dot") // Assign a class for styling
                .attr("cx", (d, i) => xScale(d.date))
                .attr("cy", (d) => yScale(d.close))
                .attr("r", 5)
            return linechart

        }).catch((error) => { // reject 
            console.log(`error :${error}`)
        })


    } // end of setContext



    render() {
        return (

            <div ref='linechart'></div>


        )
    }

}