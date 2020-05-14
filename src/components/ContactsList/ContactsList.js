import React from 'react';
import DeleteContact from './DeleteContact';
import PropTypes from 'prop-types';
import styles from './CL.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TransitionStyles from '../TransitionCss/Transition.module.css';

const ContactsList = ({ state, deleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {state.contacts
      .filter(name => {
        return name.name.toLocaleLowerCase().includes(state.filter);
      })
      .map(el => (
        <CSSTransition
          key={el.id}
          timeout={250}
          unmountOnExit
          classNames={TransitionStyles}
        >
          <li className={styles.item}>
            <p className={styles.name}>{el.name}</p>
            <p className={styles.number}>{el.number}</p>
            <DeleteContact
              deleteContact={() => deleteContact(el.id)}
              id={el.id}
            />
          </li>
        </CSSTransition>
      ))}
  </TransitionGroup>
);
ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
export default ContactsList;
