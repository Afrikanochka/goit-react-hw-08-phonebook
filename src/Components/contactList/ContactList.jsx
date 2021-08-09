import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";
import styles from './contactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.info}>
              {name}: {number}
            </p>
            <button
              className={styles.button}
              type="button"
              onClick={() => onDeleteContact(id)}>
                  Delete
              </button>
        
          </li>
        ))}
      </ul>
    );
}

// const getFilterContacts = (allContacts, filter) => {
  
//   const normalizedFilter = filter.toLowerCase();
//   // console.log(allContacts);
//   return allContacts.filter(contact => 
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapstateToProps = state => {
  return {
    contacts: getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
})

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mapstateToProps, mapDispatchToProps)(ContactList);

// const mapStateToProps = (state) => {
//   const { filter, contacts } = state.contacts;
//   const filteredContacts = onFilterRender(contacts, filter);

//   return { contacts: filteredContacts };
// };