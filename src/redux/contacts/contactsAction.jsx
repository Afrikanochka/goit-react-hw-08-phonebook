import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';


const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

 
const getContactRequest = createAction("contacts/getContactRequest");
const getContactSuccess = createAction("contacts/getContactSuccess");
const getContactError = createAction("contacts/getContactError");

  
  const changeFilter = createAction('contacts/changeFilter', (filter) => {
    return {
      payload: filter,
    };
  });

  

  const contactsActions = {
    addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, getContactRequest, getContactSuccess, getContactError, changeFilter, 
  }
  
  export default  contactsActions ;