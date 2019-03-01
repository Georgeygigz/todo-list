import React from "react";

const Todo = ({todo}) => {
      return (
        <div className="post card ">
       
          <div className="card-content">
          <div class="row">
          <div class="col s10 ">
            <span className="card-title">{todo.title}</span>
            {todo.body}
          </div>
          </div>
          </div>
        </div>
      );
};
export default Todo;
