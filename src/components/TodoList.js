import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = ({todoEdit, setTodoEdit}) => {

  const todos =useSelector((state)=>state.todos);
  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      {todos.length ===0 ? (
        <div className="alert alert-danger" role="alert">
          no todo in the list, please add one!!!
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}           
            key={todo.id}
            todoEdit={todoEdit}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
