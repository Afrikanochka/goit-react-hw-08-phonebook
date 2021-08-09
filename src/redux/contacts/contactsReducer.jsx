import { combineReducers, createReducer } from "@reduxjs/toolkit";
import contactsActions from './contactsAction';

const items = createReducer([], {
  [contactsActions.getContactSuccess]: (_, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [action.payload, ...state],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
    [contactsActions.changeFilter]: (_, action) => action.payload,
  });

const loading = createReducer(false, {
    [contactsActions.addContactRequest]: () => true,
    [contactsActions.addContactSuccess]: () => false,
    [contactsActions.addContactError]: () => false,
    [contactsActions.deleteContactRequest]: () => true,
    [contactsActions.deleteContactSuccess]: () => false,
    [contactsActions.deleteContactError]: () => false,
    [contactsActions.getContactRequest]: () => true,
    [contactsActions.getContactSuccess]: () => false,
    [contactsActions.getContactError]: () => false,
  });

const setError = (_, { payload }) => payload;

const refreshError = () => null;

const error = createReducer(null, {
  [contactsActions.addContactRequest]: refreshError,
  [contactsActions.addContactError]: setError,
  [contactsActions.deleteContactRequest]: refreshError,
  [contactsActions.deleteContactError]: setError,
  [contactsActions.getContactRequest]: refreshError,
  [contactsActions.getContactError]: setError,
});
  
  export default combineReducers({
    items,
    filter,
    loading,
    error,
  });