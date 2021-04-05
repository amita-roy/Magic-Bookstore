export const ACTIONS = Object.freeze({
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  CHANGE_FILTER: 'CHANGE_FILTER',
});

export const createBook = (book) => ({
  type: ACTIONS.CREATE_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: ACTIONS.REMOVE_BOOK,
  payload: id,
});

export const changeFilter = (filter) => ({
  type: ACTIONS.CHANGE_FILTER,
  payload: filter,
});
