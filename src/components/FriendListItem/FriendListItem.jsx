import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ data }) {
  return data.map(({ avatar, name, isOnline, id }) => {
    return (
      <li key={id} className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
}

FriendListItem.prototype = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
