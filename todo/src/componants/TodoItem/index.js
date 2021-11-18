import React from "react";


class TodoItem extends React.Component {
  constructor(props){
    super(props);
    
  }
    render () {
      
      return(

      <>
        <li>{this.props.todo.name}</li>
        
      </>
      )
    };
  }

export default TodoItem;