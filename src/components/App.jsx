import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import css from './App.module.css';

export class App extends Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = (e) => {
        this.setState(prevState => ({
            [e.target.name]: prevState[e.target.name] + 1
        }))
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, number) => {
            return total + number
        }, 0)
    };

    countPositiveFeedbackPercentage = () => {
      return Math.floor((this.state.good * 100) / this.countTotalFeedback())
    };

  render() {
    return (
      <div className={css.Container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section>
          {this.countTotalFeedback()
            ? <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
            : <Notification message={'There is no feedback'} />
          }
        </Section>
      </div>
    );
  };
};
