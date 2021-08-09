import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { getFetchContacts } from '../redux/contacts/contactsOperations';
import {
    getContacts,
    getLoading,
    getError,
  } from "../redux/contacts/contactsSelectors";

class App extends Component {
    state = {
        contacts: [],
        items: [],
        filter: ''

      }

      componentDidMount() {
          this.props.getFetchContacts();
      }

    //   componentDidMount() {
    //       const newContact = localStorage.getItem('contacts');

    //       if (newContact) {
    //           this.props.storageContact(JSON.parse(newContact));
    //       }
    //   }

    //   componentDidUpdate(prevProps, prevState) {
    //       const { contacts} = this.props;

    //       if (prevProps.contacts !== contacts) {
    //           localStorage.setItem('contacts', JSON.stringify(contacts));
    //       }
    //   }

    render() {
        return (
            <div className="container">
                <h1>Phonebook</h1>
                <ContactForm/>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList />
                {this.props.isLoading && <h2>Loading...</h2> }
                {this.props.isError && <h2>Error</h2> }

            </div>
        );
    }
}

const mapstateToProps = state => ({
    contacts: getContacts(state),
    isLoading: getLoading(state),
    isError: getError(state),
});

const mapDispatchToProps = {
    getFetchContacts: getFetchContacts,
};

export default connect(mapstateToProps, mapDispatchToProps)(App);