import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={s.feedbackButtonsList}>
      {options.map(option => (
        <li className={s.item}>
          <button
            onClick={() => onLeaveFeedback(option)}
            className={s.feedbackButton}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
