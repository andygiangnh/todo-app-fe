import React from "react";
import "./styles.css";
import TodoHeader from './component/TodoHeader'
import NewTodoForm from './component/NewTodoForm'
import Todos from './component/Todos'
import VisibilityFilter from "./component/VisibilityFilter";

export default function App() {
  return (
    <>
      <div className="container center">
        <h1 className="center title">My TODO App</h1>
        <TodoHeader />
        <NewTodoForm />
        <VisibilityFilter />
        <Todos />
      </div>
    </>
  );
}
