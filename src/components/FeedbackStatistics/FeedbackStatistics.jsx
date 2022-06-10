import s from './FeedbackStatistics.module.css';
import PropTypes from 'prop-types';

const FeedbackStatistics = ({
  stat: { good, neutral, bad },
  total,
  positivePercent = 0,
}) => {
  return (
    <ul className={s.feedbacksList}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {total}</li>
      <li className={s.item}>Positive feedbacks: {positivePercent || 0}%</li>
    </ul>
  );
};

FeedbackStatistics.propTypes = {
  stat: PropTypes.exact({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePercent: PropTypes.number,
};

export default FeedbackStatistics;
