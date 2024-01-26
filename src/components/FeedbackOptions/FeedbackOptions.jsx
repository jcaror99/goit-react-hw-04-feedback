import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, handlerLeaveFeedback } = props;

  const goodCounter = () => {
    handlerLeaveFeedback({
      good: options.goodObject.good + 1,
    });
  };

  const neutralCounter = () => {
    handlerLeaveFeedback({
      neutral: options.neutralObject.neutral + 1,
    });
  };

  const badCounter = () => {
    handlerLeaveFeedback({
      bad: options.badObject.bad + 1,
    });
  };

  return (
    <div className={css.feedbackOptions}>
      <h2>Please leave feedback</h2>
      <ul className={css.buttonList}>
        <li>
          <button onClick={goodCounter}>Good</button>
        </li>
        <li>
          <button onClick={neutralCounter}>Neutral</button>
        </li>
        <li>
          <button onClick={badCounter}>Bad</button>
        </li>
      </ul>
    </div>
  );
};

export default FeedbackOptions;
