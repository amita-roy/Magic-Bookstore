import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/book/Book';
import CategoryFilter from '../components/CategoryFilter';
import * as actions from '../actions';

import './BookList.css';

const BooksList = (props) => {
  const { books, bookFilter, fetchBooks } = props;

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleRemoveBook = (event, book) => {
    event.preventDefault();
    props.removeBook(book.id);
  };

  const displayBooks = () => {
    if (bookFilter === 'All' || '') {
      return books.map((book) => (
        <Book key={book.id} book={book} handleChange={handleRemoveBook} />
      ));
    }
    return books
      .filter((book) => book.category === bookFilter)
      .map((book) => (
        <Book key={book.id} book={book} handleChange={handleRemoveBook} />
      ));
  };

  return (
    <div className="bookList">
      <div className="book-filter">
        <CategoryFilter />
      </div>
      <div className="table">
        <div className="table-body">{displayBooks()}</div>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  bookFilter: PropTypes.string.isRequired,
  fetchBooks: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  books: state.books,
  bookFilter: state.filterReducer,
});

export default connect(mapStateToProps, actions)(BooksList);
