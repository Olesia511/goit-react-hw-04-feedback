import {
  StatisticsNumber,
  TotalFeedbackContainer,
} from './Statistics.styled.js';

export const Statistics = ({ options, total, percentage }) => {
  return (
    <div>
      <StatisticsNumber>
        {options.map(el => {
          const key = Object.keys(el)[0];
          const nameBtn = key[0].toUpperCase() + key.slice(1, key.length);
          const value = Object.values(el);

          return (
            <h3 key={key}>
              {nameBtn}: {value}
            </h3>
          );
        })}
      </StatisticsNumber>
      {total === 0 && <h3>There is no feedback</h3>}
      {total > 0 && (
        <TotalFeedbackContainer>
          <h3>Total number of feedback: {total}</h3>
          <h3>Positive feedback: {percentage}%</h3>
        </TotalFeedbackContainer>
      )}
    </div>
  );
};
