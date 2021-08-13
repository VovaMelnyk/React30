import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo/Todo";
import Form from "../Form/Form";
import "./TodoList.css";
import { getTodos } from "../../redux/slices/todo";
// import { fetchTodo } from "../../redux/actions/todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchTodo());
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <Form />
      <ul className="TodoList__todos">
        {todos.length ? (
          todos.map((todo, index) => (
            <li key={todo.id}>
              <Todo {...todo} index={index} />
            </li>
          ))
        ) : (
          <li>No tasks</li>
        )}
      </ul>
      <div className="filters">
        <button className="NewTodoForm__submit" data-filter="all">
          All
        </button>
        <button className="NewTodoForm__submit" data-filter="completed">
          Completed
        </button>
        <button className="NewTodoForm__submit" data-filter="uncompleted">
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoList;
