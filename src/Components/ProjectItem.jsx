import React from 'react'
import PropTypes from 'prop-types'

class ProjectItem extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // console.log(this.props.project.id)
        this.props.deleteProject(this.props.project.id)
    }
    
    // render() {
    //     return (
    //         <li>
    //             <strong>{ this.props.title }</strong> - { this.props.category }
    //         </li>
    //     )
    // }
    /////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <li >
                <strong>{ this.props.project.title }</strong> - { this.props.project.category } &nbsp;

                {/* Without Using 'handleClick' Method */}
                {/* <button onClick={ this.props.deleteProject.bind(this, this.props.project.id) }>Delete</button> */}

                <button onClick={ this.handleClick }>Delete</button>
                <br />
                <br />
            </li>
        )
    }

}

// Type Checking
ProjectItem.propTypes = {
    project: PropTypes.object,
    deleteProject: PropTypes.func
}

export default ProjectItem