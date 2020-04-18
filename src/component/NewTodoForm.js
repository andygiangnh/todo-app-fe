import React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class NewTodoForm extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = { description: ""}
    }
  
    onChange = (description) => {
        this.setState({ description })
    };

    createTodo = () => {
        this.props.addTodo(this.state.description)
        this.setState({description: ''})
    }

    render() {
        return (
            <>
                <textarea className= "center todo-text"
                    type="text"
                    rows="4"
                    cols="40"
                    value={this.state.description}
                    onChange={(e) => this.onChange(e.target.value)}
                />
                <br />
                <button className="button center" onClick={this.createTodo}>Add todo</button>
            </>
        )
    }  
}

export default connect(null, { addTodo })(NewTodoForm)
