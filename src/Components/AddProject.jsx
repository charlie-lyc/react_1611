import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

class AddProject extends React.Component {

    // Set Values of < this.props > in Default
    static defaultProps = {
        categories: ['- Select Category -', 'Web Design', 'Web Development', 'Mobile Design', 'Mobile Development']
    }

    constructor(props) {
        super(props)
        this.state = {
            // New Project Contents
            title: '',
            category: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        // console.log(this.state)
        // Prevent Default Behavior(Refresh Web Page)
        event.preventDefault()
        if (event.target.title.value ===  '' || event.target.category.value === '- Select Category -') {
            alert('Project Title Is Required!')
        } else {
            const newProject = {
                // Generate Universally Unique Identifier
                id: uuidv4(), 
                title: this.state.title,
                category: this.state.category
            }
            this.props.addProject(newProject)
            event.target.category.value = event.target.category.options[0].value
            event.target.title.value = ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // render() {
    //     return (
    //         <div>
    //             <h2>Add Project</h2>
    //             <form>
    //                 <div>
    //                     <label htmlFor="title">Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label>
    //                     <input type="text" name="title" placeholder="Project Title" />
    //                 </div>
    //                 <br />
    //                 <div>
    //                     <label htmlFor="category">Category : </label>
    //                     <select name="category">
    //                         {
    //                             this.props.categories.map((category, index) => {
    //                                 return <option key={ index } value={ category }>{ category }</option>
    //                             })
    //                         }
    //                     </select>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        let categoryOptions = this.props.categories.map((category, index) => 
            <option key={ index } value={ category }>{ category }</option>
        )
        return (
            <div>
                <h2>Add Project</h2>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="title">Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label>
                        <input type="text" name="title" onChange={ this.handleChange } />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="category">Category : </label>
                        <select name="category" onChange={ this.handleChange }>
                            { categoryOptions }
                        </select>
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

// Set Values of < this.props > in Default
// AddProject.defaultProps = {
//     categories: ['- Select Category -', 'Web Design', 'Web Development', 'Mobile Design', 'Mobile Development']
// }

// Type Checking
AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func,
}

export default AddProject