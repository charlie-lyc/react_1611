import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
    render() {
        return (
            <li>
                <strong>{ this.props.todo.title }</strong> &nbsp;
                { this.props.todo.completed ? <button>Completed</button> : null }
                <br />
                <br />
            </li>
        )
    }
}

// Type Checking
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem