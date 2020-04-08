import { ADD_NAME, ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from "../actionTypes";

const initialState = {
  cats: {
    1001: {
      name: "Beans",
      activity: "meowing",
    },
    1002: {
      name: "Bandit",
      activity: "eating",
    },
  },
};

const catReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NAME: {
      const { name } = action.payload;
      return name;
    }

    case ACTION_SET_ACTIVITY: {
      const { activity } = action.payload;
      return activity;
    }
    case ACTION_ADD_CAT: {
      const { name, activity } = action.payload;
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      return {
        cats: {
          ...state.cats,
          [id]: { name, activity },
        },
      };
    }
    default:
      return state;
  }
};

export default catReducer;
