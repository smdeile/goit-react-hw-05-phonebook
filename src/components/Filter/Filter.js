import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ state, handleChange }) => {
  return (
    <div className={styles.box_shadow}>
      <label className={styles.form}>
        Find contacts by name
        <input
          className={styles.input_styles}
          type="text"
          name="filter"
          value={state.filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
export default Filter;
