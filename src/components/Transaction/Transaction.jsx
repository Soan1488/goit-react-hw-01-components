import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export default function Transaction({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr className={css.trHead}>
          <th className={css.thHead}>Type</th>
          <th className={css.thHead}>Amount</th>
          <th className={css.thHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.trBody}>
              <td className={css.tdBody}>{type}</td>
              <td className={css.tdBody}>{amount}</td>
              <td className={css.tdBody}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Transaction.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
