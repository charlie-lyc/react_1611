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

import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import Todos from './Components/Todos'

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
    
    constructor() {
        super() // Call Super Class Constructor Before Using this.state
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
            ]
        }
        // this.addProject = this.addProject.bind(this)
    }

    // Using Mock Data
    getProjects() {
        // console.log(this.state.projects)
        // this.setState({
        //     projects: [
        //         {
        //             title: 'Business Website',
        //             category: 'Web Design'
        //         },
        //         {
        //             title: 'Social App',
        //             category: 'Mobile Development'
        //         },
        //         {
        //             title: 'E-commerce Shopping Cart',
        //             category: 'Web Development'
        //         }
        //     ]
        // })
        // console.log(this.state.projects)
        /////////////////////////////////////////////////
        // Asynchronous Execution
        // console.log(this.state.projects)
        this.setState({
                projects: [
                    {
                        id: uuidv4(), // Generate Universally Unique Identifier
                        title: 'Business Website',
                        category: 'Web Design'
                    },
                    {
                        id: uuidv4(),
                        title: 'Social App',
                        category: 'Mobile Development'
                    },
                    {
                        id: uuidv4(),
                        title: 'E-commerce Shopping Cart',
                        category: 'Web Development'
                    }
                ]
            }, () => {
                // console.log(this.state.projects)
            }
        )
    }

    // Using JSON Placeholder API
    getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => this.setState({ todos: data})) // Add todos to < this.state >
            .then(() => console.log(this.state))
    }       

    // Life Cycle Method
    componentDidMount() {
        // Using Mock Data
        this.getProjects()
        /////////////////////////////////////////////////
        // Using JSON Placeholder API
        this.getTodos()
    }

    // handleAddProject(project) {
    //     console.log(this.state.projects)
    //     ////////////////////////////////////////////////////////
    //     // Update projects in < this.state >
    //     // this.setState({
    //     //     // projects: this.state.projects.push(project)
    //     //     /* OR */
    //     //     // projects: this.state.projects.concat(project)
    //     //     /* OR */
    //     //     projects: [ ...this.state.projects , project]
    //     // })
    //     // // console.log(this.state.projects)
    //     ////////////////////////////////////////////////////////
    //     // Asynchronous Execution 1
    //     // this.setState({
    //     //     projects: [ ...this.state.projects , project]
    //     // }, () => {
    //     //     console.log(this.state.projects)
    //     // })
    //     ////////////////////////////////////////////////////////
    //     // Asynchronous Execution 2
    //     this.setState((prevState) => (
    //         { projects: [ ...prevState.projects , project] }
    //     ), () => {
    //         console.log(this.state.projects)
    //     })
    // }
    ///////////////////////////////////////////////////////////////
    // Using < async > and < await >
    async handleAddProject(project) {
        // console.log(this.state.projects)
        await this.setState((prevState) => (
            { projects: [ ...prevState.projects , project] }
        ))
        // console.log(this.state.projects)
    }

    async handleDeleteProject(id) {
        // console.log(this.state.projects)
        await this.setState((prevState) => ({
            projects: prevState.projects.filter(project => project.id !== id)
        }))
        // console.log(this.state.projects)
    }

    render() {
        return (
            <div>
                <h1>Project Manager</h1>
                {/* <AddProject addProject={ this.addProject }/> */}
                <AddProject addProject={ this.handleAddProject.bind(this) }/>
                <Projects projects={ this.state.projects } deleteProject={ this.handleDeleteProject.bind(this) }/>
                <hr />
                <Todos todos={ this.state.todos } />
            </div>
        )
    }

}

export default App