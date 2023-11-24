import {
  StatisticsNumber,
  TotalFeedbackContainer,
} from './Statistics.styled.js';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <StatisticsNumber>
        <>
          <h3>
            {'Good'}: {good}
          </h3>
          <h3>
            {'Neutral'}: {neutral}
          </h3>
          <h3>
            {'Bad'}: {bad}
          </h3>
        </>
      </StatisticsNumber>
      {console.log(`total`, total)}
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
