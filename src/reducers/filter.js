import { ACTIONS } from '../actions';

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
