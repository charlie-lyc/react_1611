// import { Component } from 'react'

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Project Manager</h1>
//             </div>
//         )
//     }
// }
////////////////////////////////////////////////

import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Projects from './components/Projects'
import AddProject from './components/AddProject'
import Todos from './components/Todos'

/**********************************************/
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Project Manager</h1>
//                 <Projects test="hello world"/>
//             </div>
//         )
//     }
// }
/**********************************************/

class App extends React.Component {
    
    constructor(props) {
        // Call Super Class Constructor Before Using < this.state >
        super(props) 
        this.state = {
            // Mockup Data
            projects: [
                // {
                //     title: 'Business Website',
                //     category: 'Web Design'
                // },
                // {
                //     title: 'Social App',
                //     category: 'Mobile Development'
                // },
                // {
                //     title: 'E-commerce Shopping Cart',
                //     category: 'Web Development'
                // }
            ],
            todos: []
        }
        this.handleAddProject = this.handleAddProject.bind(this)
        this.handleDeleteProject = this.handleDeleteProject.bind(this) 
    }

    // Add 'projects' to < this.state > Using Mock Data
    getProjects() {
        // console.log(this.state.projects)
        this.setState({
            projects: [
                {   
                    // Generate Universally Unique Identifier
                    id: uuidv4(), 
                    title: 'Business Website',
                    category: 'Web Design'
                },{
                    id: uuidv4(),
                    title: 'Social App',
                    category: 'Mobile Development'
                },{
                    id: uuidv4(),
                    title: 'E-commerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        }, () => {
            // console.log(this.state.projects)
        })
    }

    // Add 'todos' to < this.state > Fetching from JSON Placeholder API
    getTodos() {
        // console.log(this.state.todos)
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => this.setState({ todos: data },() => { 
                // console.log(this.state.todos)
            }))

    }       

    // Life Cycle Method
    componentDidMount() {
        // Using Mock Data
        this.getProjects()
        //////////////////////////////
        // Using JSON Placeholder API
        this.getTodos()
    }

    handleAddProject(project) {
        // console.log(this.state.projects)
        ////////////////////////////////////////////////////////
        /**
         * setState(state[, callback])
         */
        // this.setState({
        //     // projects: this.state.projects.concat(project)
        //     /* OR */
        //     projects: [ ...this.state.projects , project]
        // }, () => {
        //     // console.log(this.state.projects)
        // })
        ////////////////////////////////////////////////////////
        /**
         * setState((prevState, props) => state[, callback])
         */
        this.setState((prevState) => (
            { projects: [ project, ...prevState.projects] }
        ), () => {
            // console.log(this.state.projects)
        })
    }
    ///////////////////////////////////////////////////////////////
    /**
     * Using 'arrow function' without Binding to < this >, but Not Recommended!
     * Because This Syntax Is Experimental! 
     */
    // handleAddProject = (project) => {
    //     // console.log(this.state.projects)
    //     this.setState((prevState) => (
    //         { projects: [ ...prevState.projects , project] }
    //     ), () => {
    //         // console.log(this.state.projects)
    //     })
    // }

    handleDeleteProject(id) {
        // console.log(this.state.projects)
        this.setState((prevState) => (
            { projects: prevState.projects.filter(project => project.id !== id) }
        ), () => {
            // console.log(this.state.projects)
        })
    }

    render() {
        return (
            <div>
                <h1>Project Manager</h1>
                <AddProject addProject={ this.handleAddProject }/>
                <Projects projects={ this.state.projects } deleteProject={ this.handleDeleteProject }/>
                <hr />
                <Todos todos={ this.state.todos } />
            </div>
        )
    }

}

export default App