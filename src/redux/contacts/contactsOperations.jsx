import axios from "axios";
import contactsActions from "./contactsAction";

axios.defaults.baseURL = "https://shop-31f43-default-rtdb.firebaseio.com/";

export const addContact = contact => async dispatch => {
    dispatch(contactsActions.addContactRequest());
    // console.log(contact);
    try {
      const { data } = await axios.post('/contacts.json', contact);
      dispatch(contactsActions.addContactSuccess({ id: data.name, ...contact }));
    } catch (error) {
        // console.log(error);
      dispatch(contactsActions.addContactError(error.message));
    }
    
    // const contact = {
    //     name,
    //     number,
    //   };
    //   dispatch(contactsActions.addContactRequest());
      
    //   axios 
    //      .post("/contacts", contact)
    //      .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    //      .catch((error) => dispatch(contactsActions.addContactError(error)));
    };

export const deleteContact = (id) => async dispatch => {
    dispatch(contactsActions.deleteContactRequest());
    try {
        await axios.delete(`/contacts/${id}.json`);
        dispatch(contactsActions.deleteContactSuccess(id));
      } catch (error) {
        dispatch(contactsActions.deleteContactError(error.message));
      }
    // axios
    //    .delete(`/contacts/${id}`)
    //    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    //    .catch((error) => dispatch(contactsActions.deleteContactError(error)));
    };

    export const getFetchContacts = () => async dispatch => {
    dispatch(contactsActions.getContactRequest());
    try {
        const {data } = await axios
        .get("/contacts.json");
        if (data)
        dispatch(
            contactsActions.getContactSuccess(
            Object.keys(data).map(key => ({
              id: key,
              ...data[key],
            })),
          ),
        );
    } catch (error) {
        console.log(error);
      dispatch(contactsActions.getContactError(error.message));
    }
        
    };
    



