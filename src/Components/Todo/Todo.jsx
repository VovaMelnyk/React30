import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
// import { deleteTodo } from "../../redux/actions/todo";
import { deleteTodo } from "../../redux/slices/todo";
import "./Todo.css";
const Todo = ({ status, title, author, priority, id, index }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };

  const updateItem = () => {};

  return (
    <div className="Todo">
      <div onClick={updateItem}>
        <p className={`Todo__name ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority ${status && "done"}`}>
          {priority} priority
        </p>
        <p className={`Todo__author ${status && "done"}`}>{author}</p>
      </div>
      <span className="Todo__remove" onClick={deleteItem}>
        <BsTrashFill />
      </span>
    </div>
  );
};

export default Todo;
