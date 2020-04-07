import { ADD_NAME } from "../actionTypes";

const initialState = "Butterfinger";

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME: {
      const { name } = action.payload;
      return {
        name,
      };
    }
    default:
      return state;
  }
};

export default nameReducer;
