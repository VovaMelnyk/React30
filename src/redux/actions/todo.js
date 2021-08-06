import { ADD_TODO, DELETE_TODO } from "../types";

export const addTodo = (formData) => ({
  type: ADD_TODO,
  payload: formData,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
