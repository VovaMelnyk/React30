import { diff } from "deep-object-diff";

export const ownLogger = (store) => (next) => (action) => {
  console.group(action.type);
  const oldState = store.getState();
  console.log("old state", oldState);
  console.info("action", action);
  const result = next(action);
  const newState = store.getState();
  console.log("new state", newState);
  console.info("State diff", diff(oldState, newState));
  console.groupEnd();
  return result;
};
