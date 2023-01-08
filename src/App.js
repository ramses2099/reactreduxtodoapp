import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todoEdit, setTodoEdit] = useState(null);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList todoEdit={todoEdit} setTodoEdit={setTodoEdit} />
        </div>
        <div className="col-4">
          <TodoForm todoEdit={todoEdit} setTodoEdit={setTodoEdit} />
        </div>
      </div>
    </div>
  );
};

export default App;
