import React, {Component} from "react";
import { todos } from "../../todos/todos";
import { Link, Route } from "react-router-dom";
import Todo from "../Todo";

class Home extends Component {
 
  render(){
  const todoList = todos.todos.length ? (
    todos.todos.map(todo => {
      return (
        <div className="col s4">
        <div className=" post card ">
              <div class="card-image">
                <img src={todo.img} />
              </div>
              <div className="card-content">
                <Link to={<Todo todo={todo} />}>
                  <span className="card-title">{todo.title}</span>
                </Link>
                {todo.body}
            </div>
        </div>
        </div>
      );
    })
  ) : (
    <div className="center">No Posts found</div>
  );
  return <div className="container">
    <div className="row">
    {todoList}
    </div>
    </div>;
   }
};
export default Home;
