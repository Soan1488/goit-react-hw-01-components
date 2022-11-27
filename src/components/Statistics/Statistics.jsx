import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import RandomColor from './RandomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: `${RandomColor()}` }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.string,
    })
  ),
};
