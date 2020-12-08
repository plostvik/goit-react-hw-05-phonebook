import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contact, handleDelete }) => (
  <div className={styles.wrapper}>
    <li className={styles.listItem}>
      {contact.name}: <span>{contact.number}</span>
    </li>
    <button type="button" onClick={handleDelete} className={styles.btn}>
      X
    </button>
  </div>
);

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
