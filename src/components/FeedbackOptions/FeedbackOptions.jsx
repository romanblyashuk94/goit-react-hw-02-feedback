import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={s.feedbackButtonsList}>
      {options.map(option => (
        <li key={option} className={s.item}>
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
