import { ACTION_SET_ACTIVITY, ADD_NAME } from "./actionTypes";

export const setActivity = (activity) => ({
  type: ACTION_SET_ACTIVITY,
  payload: {
    activity,
  },
});

export const addName = (name) => ({
  type: ADD_NAME,
  payload: {
    name,
  },
});
