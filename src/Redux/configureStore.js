import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/books';
import catReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: catReducer,
  },
});

export default store;
