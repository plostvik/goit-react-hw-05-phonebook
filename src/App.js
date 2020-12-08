import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import style from './App.module.css';
import { CSSTransition } from 'react-transition-group';
import Notification from './components/Notification';
import notificationAnimations from './components/Notification/Notification.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isExists: false,
  };

  componentDidMount() {
    const storageContacts = JSON.parse(localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    if (storageContacts) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addToContacts = (name, number) => {
    if (this.state.contacts.some(el => el.name === name)) {
      this.setState({ isExists: true });
    } else {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };

      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
    setTimeout(() => this.setState({ isExists: false }), 1500);
  };

  handleFilterChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = id => {
    this.setState(state => {
      const contacts = state.contacts.filter(item => item.id !== id);
      return {
        contacts,
      };
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter, isExists } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <CSSTransition in={true} appear={true} timeout={500} classNames={style}>
          <h1 className={style.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm addToContacts={this.addToContacts} />
        <h2 className={style.title}>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          visibleContacts={visibleContacts}
          handleDelete={this.handleDelete}
        />
        <CSSTransition
          in={isExists}
          timeout={250}
          unmountOnExit
          // delay={250}
          classNames={notificationAnimations}
        >
          <Notification message="Contact already exists!" />
        </CSSTransition>
      </>
    );
  }
}
