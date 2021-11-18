import React from "react";
import TodoItem from "../TodoItem";
import "./style.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
     todos:[
      { id: 1, name:"Mohammed"},
      { id: 2, name:"Ali"},
    ],
};

  }
  render() {
    return (
      <div className="todo">
        <form>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul>
          {this.state.todos.map((todo,i) => (
            // this.setState.todos;
             <TodoItem todo={todo} key={i} /> 
          ))}
        </ul>
        
      </div>
    );
  }
}

export default Todo;
