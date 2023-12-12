import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  goodCounter = () => {
    this.props.onLeaveFeedback({
      good: this.props.options.good + 1,
    });
  };

  neutralCounter = () => {
    this.props.onLeaveFeedback({
      neutral: this.props.options.neutral + 1,
    });
  };

  badCounter = () => {
    this.props.onLeaveFeedback({
      bad: this.props.options.bad + 1,
    });
  };

  render() {
    return (
      <div className={css.feedbackOptions}>
        <h2>Please leave feedback</h2>
        <ul className={css.buttonList}>
          <li>
            <button onClick={this.goodCounter}>Good</button>
          </li>
          <li>
            <button onClick={this.neutralCounter}>Neutral</button>
          </li>
          <li>
            <button onClick={this.badCounter}>Bad</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
