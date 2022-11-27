import css from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function Friends({ data }) {
  return (
    <ul className={css.friendsList}>
      <FriendListItem data={data} />
    </ul>
  );
}

Friends.prototype = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
