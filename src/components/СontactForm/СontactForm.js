import React from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

const СontactForm = ({ onSubmit, state, handleChange }) => {
  return (
    <div className={styles.box_shadow}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.input_styles}
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.input_styles}
            type="number"
            name="number"
            value={state.number}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
СontactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
export default СontactForm;
