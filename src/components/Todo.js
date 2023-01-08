import React from "react";
import { useDispatch } from "react-redux";
import { todoDelete, todoCompleted } from "../features/todosSlice";

const Todo = ({ todo, setTodoEdit }) => {
  const dispatch = useDispatch();
  const { id, title, description, completed } = todo;

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-end">
          {title}
          <button
            className={`btn btn-sm ${
              completed ? "btn-outline-success" : "btn-success"
            }  ms-2`}
            onClick={() => {
              dispatch(todoCompleted(id));
            }}
          >
            {completed ? "Complete" : "Finish"}
          </button>
        </h3>
        <p className="card-text text-end">{description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={(e) => {
              setTodoEdit(todo);
            }}
          >
            Editas
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={(e) => {
              dispatch(todoDelete(id));
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
