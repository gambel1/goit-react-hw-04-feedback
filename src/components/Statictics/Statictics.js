import { StaticticsListUl, StaticticsListSpan } from './Statictics.styled';
import PropTypes from 'prop-types';

export default function Statictics(props) {
  const { good, neutral, bad, total, positiveFeedback } = props;
  return (
    <StaticticsListUl>
      <li>
        <StaticticsListSpan>Good</StaticticsListSpan>
        <StaticticsListSpan>{good}</StaticticsListSpan>
      </li>
      <li>
        <StaticticsListSpan>Neutral</StaticticsListSpan>
        <StaticticsListSpan>{neutral}</StaticticsListSpan>
      </li>
      <li>
        <StaticticsListSpan>Bad</StaticticsListSpan>
        <StaticticsListSpan>{bad}</StaticticsListSpan>
      </li>
      <li>
        <StaticticsListSpan>Total</StaticticsListSpan>
        <StaticticsListSpan>{total}</StaticticsListSpan>
      </li>
      <li>
        <StaticticsListSpan>Positive Feedback</StaticticsListSpan>
        <StaticticsListSpan>{positiveFeedback} %</StaticticsListSpan>
      </li>
    </StaticticsListUl>
  );
}

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
