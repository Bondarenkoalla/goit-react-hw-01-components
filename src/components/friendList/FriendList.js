import React from "react";
import FriendItem from "./FriendItem";
import styles from "./FriendList.module.scss"
import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          < FriendItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
);
};


  export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};