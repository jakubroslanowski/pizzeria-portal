import React from 'react';
import styles from './Dashboard.module.scss';
import Kitchen from '../Kitchen/Kitchen';
import Waiter from '../Waiter/WaiterContainer';

const Dashboard = () => {
  return (
    <div className={styles.component}>
      <h1>dashboard</h1>
      <h3>kitchen</h3>
      <Kitchen />
      <h3>waiter</h3>
      <Waiter />
    </div>
  );
};

export default Dashboard;
