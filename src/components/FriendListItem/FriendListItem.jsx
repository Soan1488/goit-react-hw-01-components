import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ data: { avatar, name, isOnline } }) {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.prototype = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
