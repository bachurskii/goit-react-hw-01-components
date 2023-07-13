import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
  };

  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
        style={statusStyle}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
