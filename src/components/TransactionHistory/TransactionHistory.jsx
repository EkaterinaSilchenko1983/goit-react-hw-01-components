import PropTypes from 'prop-types';
import {
  Column,
  Head,
  Raw,
  TableTransaction,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <Head>
        <tr>
          <Column>Type</Column>
          <Column>Amount</Column>
          <Column>Currency</Column>
        </tr>
      </Head>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Raw key={id}>
            <Column>{type}</Column>
            <Column>{amount}</Column>
            <Column>{currency}</Column>
          </Raw>
        ))}
      </tbody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
