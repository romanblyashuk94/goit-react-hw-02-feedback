import s from './FeedbackStatistics.module.css';

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
export default FeedbackStatistics;
