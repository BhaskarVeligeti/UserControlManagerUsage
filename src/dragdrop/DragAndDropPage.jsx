import React, { Component } from 'react';

/*
make an element draggable by adding the “draggable” attribute
make an area droppable by implementing the “dragover” event
capture the drag data by implementing the “dragstart” event
capture the drop by implementing the “drop” event
implement the “drag” event that is fired as the element is being dragged
store the intermediate data in the dataTransfer object

Step 1 — create the state object to store some tasks
Step 2 — organize our data into categories
Step 3 — make the task item draggable
Step 4 — create a droppable container
Step 5 — capture the state of the element being dragged
Step 6 — handle the drop event.
*/

export class DragAndDropPage extends React.Component {

    // Step 1
    constructor(props) {
        super(props);
        this.state = { // drag and drop these tasks into different categories like wip, complete
            tasks: [
                { key: "Learn Angular", category: "wip", bgcolor: "yellow" },
                { key: "React", category: "wip", bgcolor: "pink" },
                { key: "Vue", category: "complete", bgcolor: "skyblue" }
            ]
        }


    } // end of constructor

    // Step 4
    onDragOver = (e) => {
        e.preventDefault();
        console.log("onDragOver :")
    }

    // Step 5
    onDragStart = (e, key) => {
        console.log("onDragStart :", key)
        e.dataTransfer.setData("text/plain", key)  // element being dragged is stored in the event object and is available for use when required. 
    }

    //Step 6 
    onDrop = (e, cat) => {
        let id = e.dataTransfer.getData("text") // grap the source element
        console.log("onDrop - category :", cat, " | key :", id)
        // create new task[] with updated category
        let tasks = this.state.tasks.filter((task) => {
            if (task.key == id) {
                task.category = cat
            }
            return task
        })
        // update state
        this.setState({ ...this.state })
    }


    render() {
        //Step 2 : 
        var tasks = { //group tasks into their respective categories, wip and complete.
            wip: [],
            complete: []
        }

        /*
        we are looping through all tasks and creating a div for every task item and storing it in the respective categories.
        Add the draggable attribute to the <div>
        */
        this.state.tasks.map((row, idx) => {
            // console.log("tasks : ",row)
            tasks[row.category].push(
                <div
                    key={row.key}
                    onDragStart={(e) => this.onDragStart(e, row.key)}  // Step 5
                    draggable   // Step 3
                    style={{ background: row.bgcolor }}>
                    {row.key}
                </div>)


        })  // end of Step 2
        // console.log("tasks : ", tasks)

        return (
            <div >
                <main role="main" className="container pt-7 container-drag" >
                    <div className="alert alert-primary" role="alert">
                        Implement the drag and drop feature without using external libraries
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                       
                                    <div
                                        onDragOver={(e) => this.onDragOver(e)} // Step 4
                                        onDrop={(e) => { this.onDrop(e, "wip") }}  // Step 6 
                                    >
                                    <div className="card">
                                    <div className="card-body">
                                    <h5 className="card-header">WIP</h5>
                                        {tasks.wip}
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="col-md-6">

                       
                        <div className="droppable"
                        onDragOver={(e) => this.onDragOver(e)} // Step 4
                        onDrop={(e) => { this.onDrop(e, "complete") }} //Step 6 
                    >
                    <div className="card" >
                    <div className="card-body">
                    <h5 className="card-header">complete...</h5>
                     
                        {tasks.complete}
                    </div>
                        </div>
                    </div>


                            
                        </div>
                    </div>
                </main>
            </div>
        )


    }// end of render


}