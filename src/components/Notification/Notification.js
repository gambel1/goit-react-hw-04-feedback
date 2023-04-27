import {NotificationBox} from './Notification.styled'
import PropTypes from 'prop-types';
export default function Notification({ message }) {
  return <NotificationBox>{message}</NotificationBox>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
