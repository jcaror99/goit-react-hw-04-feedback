import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import './Section/Section.module.css';

const App = () => {
  const [goodObject, setGoodObject] = useState({ good: 0 });
  const [neutralObject, setNeutralObject] = useState({ neutral: 0 });
  const [badObject, setBadObject] = useState({ bad: 0 });

  const handlerLeaveFeedback = updatedState => {
    if (updatedState.good) {
      return setGoodObject(updatedState);
    }
    if (updatedState.neutral) {
      return setNeutralObject(updatedState);
    }
    if (updatedState.bad) {
      return setBadObject(updatedState);
    }
  };

  const countTotalFeedback = () => {
    return goodObject.good + neutralObject.neutral + badObject.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback() === 0 ? 1 : countTotalFeedback();
    let good = goodObject.good;
    return (good / total) * 100 + '%';
  };

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Test Tittle">
        <FeedbackOptions
          options={{ goodObject, neutralObject, badObject }}
          handlerLeaveFeedback={handlerLeaveFeedback}
        />
        <Statistics
          good={goodObject.good}
          neutral={neutralObject.neutral}
          bad={badObject.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export { App };
