import Bookstore from '../apis/bookstore';

export const ACTIONS = Object.freeze({
  FETCH_BOOKS: 'FETCH_BOOKS',
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_FILTER: 'CHANGE_FILTER',
});

export const fetchBooks = () => async (dispatch) => {
  const response = await Bookstore.fetchBooks();

  dispatch({ type: ACTIONS.FETCH_BOOKS, payload: response });
};

export const createBook = (book) => async (dispatch) => {
  await Bookstore.createBook(book);

  dispatch({ type: ACTIONS.CREATE_BOOK, payload: book });
};

export const removeBook = (id) => ({
  type: ACTIONS.REMOVE_BOOK,
  payload: id,
});

export const changeFilter = (filter) => ({
  type: ACTIONS.CHANGE_FILTER,
  payload: filter,
});
