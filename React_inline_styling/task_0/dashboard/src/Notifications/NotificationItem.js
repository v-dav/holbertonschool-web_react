import React from "react";
import PropTypes from 'prop-types';

const NotificationItem = ({id, type, value, html, markAsRead}) => {
    const handleClick = () => {
      markAsRead(id);
    };

    let listItem;

    if (value) {
      listItem = <li onClick={handleClick} data-notification-type={type}>{value}</li>;
    } else {
      listItem = (
        <li onClick={handleClick} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      );
    }

    return listItem;
}

NotificationItem.prototypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html : PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired
};

NotificationItem.defaultProps = {
  type: 'default'
}

export default React.memo(NotificationItem);