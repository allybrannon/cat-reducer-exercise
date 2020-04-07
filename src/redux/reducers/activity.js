//import action types
import { ACTION_SET_ACTIVITY, ADD_NAME } from "../actionTypes";

const initialState = {
  name: "Butterfinger",
  activity: "napping",
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ACTIVITY: {
      const { activity } = action.payload;
      return {
        ...state,
        activity,
      };
    }
    case ADD_NAME: {
      const { name } = action.payload;
      return {
        ...state,
        name,
      };
    }
    default:
      return state;
  }
};

export default activityReducer;
