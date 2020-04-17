import React from "react";

export default class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  onChange(e) {
    this.setState({description: e.target.value})
  };

  createTodo = () => {
    this.props.onAdd(this.state.description)
    this.setState({description: ''})
  }

  render() {
    return (
      <>
        <textarea class= "center todo-text"
          type="text"
          rows="4"
          cols="40"
          value={this.state.description}
          onChange={(e) => this.onChange(e)}
        />
        <br />
        <button class="button center" onClick={this.createTodo}>Add todo</button>
      </>
    );
  }
}
