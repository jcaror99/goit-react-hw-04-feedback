import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import './Section/Section.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerLeaveFeedback = updatedState => {
    this.setState(updatedState);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback() === 0 ? 1 : this.countTotalFeedback();
    let good = this.state.good;
    return (good / total) * 100 + '%';
  };

  render() {
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
            options={this.state}
            onLeaveFeedback={this.handlerLeaveFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export { App };
