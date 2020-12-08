import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ContactList = ({ visibleContacts, handleDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {visibleContacts.map(el => {
        return (
          <CSSTransition key={el.id} classNames={styles} timeout={250}>
            <ContactListItem
              contact={el}
              handleDelete={() => handleDelete(el.id)}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
