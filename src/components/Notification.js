import { Statistics } from './Statistics/Statistics';

export const Notification = ({ good, neutral, bad, total, percentage }) => {
  return total === 0 ? (
    <h3>There is no feedback</h3>
  ) : (
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      percentage={percentage}
    />
  );
};
