import React from "react";
import styles from "./FriendList.module.scss"
import PropTypes from 'prop-types';
const FriendItem = ({ avatar, name, id, isOnline }) => {
  return ( 
    <li className={styles.item} key={id}>
      {isOnline ? (<span className={styles.is_online}>{isOnline}</span>) : (<span className={styles.is_ofline}>{isOnline}</span>)}
              
          <img  src={avatar} alt="" width="48" />
              <p >{name}</p>
        </li>
      )
    
 };
export default FriendItem;
FriendItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
 id: PropTypes.number,
}

FriendItem.defaultProps = {
  avatar:
    'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};
