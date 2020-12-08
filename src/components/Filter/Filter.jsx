import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
        className={styles.input}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
