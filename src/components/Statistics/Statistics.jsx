import css from './Statistics.module.css';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div className={css.statistics}>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    </div>
  );
};

export default Statistics;
