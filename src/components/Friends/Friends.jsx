import css from './Friends.module.css';
import PropTypes from 'prop-types';

export default function Friends(props) {
  return (
    <ul className={css.friendsList}>
      {props.data.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={isOnline ? css.online : css.offline}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

Friends.prototype = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
