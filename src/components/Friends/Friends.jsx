import css from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function Friends({ data }) {
  return (
    <ul className={css.friendsList}>
      {data.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <FriendListItem data={{ avatar, name, isOnline }} />;
          </li>
        );
      })}
    </ul>
  );
}

Friends.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
};
