import React from "react";
import { PropTypes } from 'prop-types';

function NotificationItem({ type, value, html }) {
  let listItem;

  if (value) {
    listItem = <li data-notification-type={type}>{value}</li>;
  } else {
    listItem = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }

  return listItem;
}

NotificationItem.prototype = {
  type: PropTypes.string.isRequired,
  html : PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string.isRequired
}

export default NotificationItem;