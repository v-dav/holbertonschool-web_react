import React, {Component} from "react";
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {id, markAsRead} = this.props;
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;
    let listItem;

    if (value) {
      listItem = <li onClick={this.handleClick} data-notification-type={type}>{value}</li>;
    } else {
      listItem = (
        <li onClick={this.handleClick} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      );
    }

    return listItem;
    }
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

export default NotificationItem;