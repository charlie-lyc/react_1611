import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

class Todos extends React.Component {

    render() {
        let todoItems
        if (!this.props.todos || this.props.todos.length === 0) {
            todoItems = <h2>No Todos</h2>
        } else {
            todoItems = this.props.todos.map((todo, index) => 
                <TodoItem key={ todo.id } todo={ todo } />
            )
        }
        return (
            <div>
                <h2>Todo List</h2>
                <ul>
                    { todoItems }
                </ul>
            </div>
        )
    }
}

// Type Checking
Todos.propTypes = {
    todos: PropTypes.array
}

export default Todos