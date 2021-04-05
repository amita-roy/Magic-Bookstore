import { ACTIONS } from '../actions';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.CREATE_BOOK:
      return [...state, action.payload];
    case ACTIONS.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case ACTIONS.FETCH_BOOKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default bookReducer;
