import { Statistics } from './Statistics/Statistics';

export const Notification = ({ options, total, percentage }) => {
  return total === 0 ? (
    <h3>There is no feedback</h3>
  ) : (
    <Statistics options={options} total={total} percentage={percentage} />
  );
};
