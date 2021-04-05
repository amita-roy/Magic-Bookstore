import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './containers/App';

const initialState = {
  bookReducer: [
    {
      id: Math.random(),
      title: 'Quixote',
      category: 'Action',
    },
    {
      id: Math.random(),
      title: 'Hamlet',
      category: 'Biography',
    },
    {
      id: Math.random(),
      title: 'The history of the universe',
      category: 'Sci-Fi',
    },
  ],
  filterReducer: 'All',
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
