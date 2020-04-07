import { ADD_NAME } from "../actionTypes";

const initialState = {
  name: "Butterfinger",
};

const catNameReducer = () => {
  switch (action.type) {
    case ACTION_ADD_NAME: {
      return {
        ...state,
        name: action,
      };
    }
    default:
      return state;
  }
};
export default catNameReducer;
