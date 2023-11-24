import { useEffect, useState } from 'react';
import { GlobalStyle } from './ClobalStyles';
import { Title, BasicContainer, Section } from './App.styled';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification';

const useUpdateValue = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const objectValue = {
    [key]: value,
  };
  const update = () => {
    setValue(value => value + 1);
  };
  return [objectValue, update];
};

export const App = () => {
  const [good, setGood] = useUpdateValue('good', 0);
  const [neutral, setNeutral] = useUpdateValue('neutral', 0);
  const [bad, setBad] = useUpdateValue('bad', 0);

  const options = [good, neutral, bad];

  const totalFeedback = () => {
    return good.good + neutral.neutral + bad.bad;
  };

  const positiveFeedbackPercentage = () => {
    const total = totalFeedback();
    return good.good > 0 ? Math.round((good.good / total) * 100) : 0;
  };

  return (
    <BasicContainer>
      <Section title="feedback">
        <Title>Please leave feedback</Title>

        <FeedbackOptions
          updateGood={setGood}
          updateNeutral={setNeutral}
          updateBad={setBad}
        />
      </Section>

      <Section title="statistics">
        <Title>Statistics</Title>

        <Notification
          options={options}
          total={totalFeedback()}
          percentage={positiveFeedbackPercentage()}
        />
      </Section>

      <GlobalStyle />
    </BasicContainer>
  );
};
