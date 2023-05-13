import React, {useState} from 'react';
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      
      default:
        console.warn('Value is wrong!');
    };
  };

    const countTotalFeedback = () => {
        return Object.values({good, neutral, bad}).reduce((total, number) => {
          return total + number;
        }, 0)
    };

    const countPositiveFeedbackPercentage = () => {
      return Math.floor((good * 100) / countTotalFeedback());
    };

    return (
      <div className={css.Container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section>
          {countTotalFeedback()
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()} />
            : <Notification message={'There is no feedback'} />
          }
        </Section>
      </div>
    );
};
