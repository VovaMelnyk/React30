import axios from "axios";
import { ADD_TODO, DELETE_TODO, SET_TODO } from "../types";

export const addTodo = (formData) => ({
  type: ADD_TODO,
  payload: formData,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setTodo = (todos) => ({
  type: SET_TODO,
  payload: todos,
});

export const fetchTodo = () => (dispatch) => {
  axios
    .get("http://localhost:7777/task")
    .then((result) => dispatch(setTodo(result.data)));
};
