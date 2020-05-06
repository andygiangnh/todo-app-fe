import React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import styled from "styled-components";

const NewTodoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const newTodoText = {
    flex: 1,
    marginBottom: '10px',
    marginTop: '10px'
}

const todoButton = {
    padding: '10px 20px',
    flex: 1
}

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
            <NewTodoDiv>
                <textarea style={newTodoText}
                    type="text"
                    rows="4"
                    cols="40"
                    value={this.state.description}
                    onChange={(e) => this.onChange(e.target.value)}
                />
                {this.props.loading && <span className="center">is saving to server ...</span>}
                {this.props.error && <span className="center">{this.props.error}</span>}
                <button style={todoButton} onClick={this.createTodo}>Add todo</button>
            </NewTodoDiv>
        )
    }  
}

const mapStateToProps = state => ({
    error: state.todos.error?.add,
    loading: state.todos.loading?.add
})

export default connect(mapStateToProps, { addTodo })(NewTodoForm)
