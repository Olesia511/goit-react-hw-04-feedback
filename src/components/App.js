import { useState } from 'react';
import { GlobalStyle } from './ClobalStyles';
import { Title, BasicContainer, Section } from './App.styled';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(prev => prev + 1);
  };

  const updateNeutral = () => {
    setNeutral(prev => prev + 1);
  };

  const updateBad = () => {
    setBad(prev => prev + 1);
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    const total = totalFeedback();
    return good > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <BasicContainer>
      <Section title="feedback">
        <Title>Please leave feedback</Title>

        <FeedbackOptions
          updateGood={updateGood}
          updateNeutral={updateNeutral}
          updateBad={updateBad}
        />
      </Section>

      <Section title="statistics">
        <Title>Statistics</Title>

        <Notification
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          percentage={positiveFeedbackPercentage()}
        />
      </Section>

      <GlobalStyle />
    </BasicContainer>
  );
};
