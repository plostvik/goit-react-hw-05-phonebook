import React from 'react';
import style from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={style.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultPros = {
  message: 'Contact already exists!',
};
