import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = (id) => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to='/waiter/order/new'>New Order</Link>
    <Link to={`/waiter/order/${id}`}>Current Order</Link>
  </div>
);

export default Waiter;
