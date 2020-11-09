import React from 'react';
import styles from './Tables.module.scss';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tables = (id) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to='/tables/booking/new'>New Reservation</Link>
    <Link to={`tables/booking/${id}`}>Reservated Table</Link>
    <Link to='/tables/event/new'>Event New Reservation</Link>
    <Link to={`/tables/event/${id}`}>Event Booked Table</Link>
  </div>
);
Tables.propTypes = {
  id: propTypes.string,
};
export default Tables;
