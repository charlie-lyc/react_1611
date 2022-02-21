import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

class AddProject extends React.Component {
    // Set Values of < this.props > in Default
    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Design', 'Mobile Development']
    }

    constructor(props) {
        super(props)
        this.state = {
            newProject: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    // handleSubmit(event) {
    //     // console.log('Submitted')
    //     event.preventDefault()// Prevent Default Behavior(Refresh Web Page)
    //     if (event.target.title.value ===  '') {
    //         alert('Project Title Is Required!')
    //     } else {
    //         // Asynchronous Execution
    //         this.setState({
    //             newProject: {
    //                 title: event.target.title.value,
    //                 category: event.target.category.value
    //             }
    //         }, () => {
    //             // console.log(this.state.newProject)
    //             this.props.addProject(this.state.newProject)
    //             event.target.title.value = ''
    //         })     
    //     }
    // }
    ///////////////////////////////////////////////////////////////////////
    // Using < async > and < await >
    async handleSubmit(event) {
        event.preventDefault()
        if (event.target.title.value ===  '') {
            alert('Project Title Is Required!')
        } else {
            await this.setState({
                newProject: {
                    // Generate Universally Unique Identifier
                    id: uuidv4(), 
                    title: event.target.title.value,
                    category: event.target.category.value
                }
            })
            // console.log(this.state.newProject)
            this.props.addProject(this.state.newProject)
            event.target.title.value = ''
        }
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
                        <input type="text" name="title" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="category">Category : </label>
                        <select name="category">
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
//     categories: ['Web Design', 'Web Development', 'Mobile Design', 'Mobile Development']
// }

// Type Checking
AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func,
}

export default AddProject