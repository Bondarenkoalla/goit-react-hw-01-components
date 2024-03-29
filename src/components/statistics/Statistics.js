import React from 'react';
import styles from "./Statistics.module.scss";
import PropTypes from 'prop-types';
const Statistics = ({ title, stats }) => {
    
  
  
    return (<section className={styles.statistics}>
    {title && <h2 >{title}</h2>}
  

        <ul className={styles.stat_list}>
            {stats.map(stat => (<li  className={styles.item} key={stat.id}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>))}
    
    
  </ul>
  </section>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Statistics;