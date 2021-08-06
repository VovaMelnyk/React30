import { ADD_TODO } from "../types";

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: task,
});
