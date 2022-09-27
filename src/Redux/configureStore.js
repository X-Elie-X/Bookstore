import { ConditionFunction } from '@reduxjs/toolkit';
import Reducer from './Books/books';
import catReducer from './categories/categories';

const combineReducers = ConditionFunction({
  books: Reducer,
  categories: catReducer,
});

export default combineReducers;
