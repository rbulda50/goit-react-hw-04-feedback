import './FeedbackOptions.jsx';
import firstLetterToUpperCase from './FirstLetterToUpperCase.js';
import css from './FeedbackOptions.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const OptionKeys = Object.keys(options);
    return (
        <div>
            {OptionKeys.map(option => (
                <button
                    key={option}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                    className={clsx(css.FeedbackOptions__button, css[option])}
                >{firstLetterToUpperCase(option)}</button>
            ))}
        </div>
    )
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
};