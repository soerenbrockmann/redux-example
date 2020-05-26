import { SET_NAME, RESET_NAME } from '../actions';

const initialState = {
  name: '',
};
export const nameReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_NAME: {
      return { ...state, name: payload };
    }
    case RESET_NAME: {
      return { ...state, name: payload };
    }
    default:
      return state;
  }
};
