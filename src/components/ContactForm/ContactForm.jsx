import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    addToContacts: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addToContacts } = this.props;
    addToContacts(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        action="submit"
        onSubmit={this.handleSubmit}
        className={styles.contactform}
      >
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
          className={styles.input}
        />
        <label htmlFor="number" className={styles.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          onChange={this.handleChange}
          value={number}
          className={styles.input}
        />
        <input type="submit" value="Add Contact" className={styles.button} />
      </form>
    );
  }
}
