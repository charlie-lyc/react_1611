import React from 'react'
import PropTypes from 'prop-types'

/*******************************************/
// class Projects extends React.Component {
//     render() {
//         return (
//             <div >
//                 <h2>My Projects</h2>
//                 {this.props.test}
//             </div>
//         )
//     }
// }
/*******************************************/
import ProjectItem from './ProjectItem'

class Projects extends React.Component {

    // render() {
    //     console.log(this.props)
    //     return (
    //         <div >
    //             <h2>My Projects</h2>
    //             {
    //                 !this.props.projects || this.props.projects.length === 0 
    //                 ? '<h3>No Projects</h3> 
    //                 : this.props.projects.map((project, index) => {
    //                     return (
    //                         <ProjectItem 
    //                             key={ index } 
    //                             title={ project.title } 
    //                             category={ project.category } 
    //                         />
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }
    /////////////////////////////////////////////////////////////////
    render() {
        // console.log(this.props)
        let projectItems
        if (!this.props.projects || this.props.projects.length === 0) {
            projectItems = <h3>No Projects</h3>
        } else {
            projectItems = this.props.projects.map((project, index) => 
                <ProjectItem key={ index } project={ project } deleteProject={ this.props.deleteProject } />
            )
        }
        return (
            <div >
                <h2>Latest Projects</h2>
                <ul>
                    { projectItems }
                </ul>
            </div>
        )
    }

}

// Type Checking
Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    deleteProject: PropTypes.func.isRequired
}

export default Projects