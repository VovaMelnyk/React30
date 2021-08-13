import { ADD_TODO, DELETE_TODO, SET_TODO } from "../types";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case SET_TODO:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todoReducer;
