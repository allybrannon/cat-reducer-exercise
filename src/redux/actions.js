import { ACTION_SET_ACTIVITY, ADD_NAME, ACTION_ADD_CAT } from "./actionTypes";

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

export const addCat = ({name, activity}) => ({
  type: ACTION_ADD_CAT,
  payload {
    
}
})