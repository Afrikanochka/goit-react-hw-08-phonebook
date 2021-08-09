import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./contactForm.module.css";
import { connect } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsOperations';

class ContactForm extends Component {
    state = { 
        name: '',
        number: '',
     }

     handleChange = (e) => {
        const { name, value } = e.currentTarget;
    
        this.setState({ [name]: value });
      };

     handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, number } = this.state;
        const { contacts } = this.props;
        const existContacts = contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        );

        if (existContacts) {
          return alert(`Contact "${name}" already exists`);
        }
        this.props.onSubmit({ name, number });
    
        this.setState({ name: '', number: '' });
      };

    render() {
        const {name, number} = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit} >
            <label htmlFor="name" className={styles.label}>
            <input
             value={name}
             onChange={this.handleChange}
             placeholder="Имя Фамилия"
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
             required
/>
            </label>
            <label htmlFor="number" className={styles.label}>
            <input
             value={number}
             onChange={this.handleChange}
             placeholder="111-11-11"
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
             required
/>
            </label>
            <button className={styles.button} type="submit" >Add contact</button>
        </form>
        );
    }
}

const mapstateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (contact) =>
  dispatch(addContact(contact)),
});

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default connect(mapstateToProps, mapDispatchToProps)(ContactForm);