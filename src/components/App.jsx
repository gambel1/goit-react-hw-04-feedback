import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statictics from './Statictics/Statictics';

import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleClickButton(event) {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
  }

  const totalFeedback = good + neutral + bad;
  const percentage = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          buttonClick={handleClickButton}
        />
      </Section>

      <Section title="Statictics">
        {!totalFeedback ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={percentage}
          />
        )}
      </Section>
    </div>
  );
}

