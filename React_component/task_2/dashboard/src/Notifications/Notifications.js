import React, {Component} from 'react';
import NotificationItem from './NotificationItem'
import './Notifications.css'
import close from '../assets/close.png'


class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayDrawer: false
        }
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    render() {

        const {listNotifications} = this.props;
        const {displayDrawer} = this.state;

        return (
            <div className='noti'>
                <div className="menuItem">
                    Your notifications
                </div>
    
                {displayDrawer && (
                    <div className='Notifications'>
    
                        <button
                            style={{
                                display: "flex",
                                border: "none",
                                cursor: "pointer",
                                position: "absolute",
                                right: "10px",
                                top: "10px"
                            }}
                            aria-label='close'>
                            <img style={{ width: "15px" }} src={close} alt="button close" />
                        </button>
                        <p>Here is the list of notifications</p>
    
                        <ul>
    
                            {listNotifications.length === 0 && (
                                <NotificationItem value="No new notification for now" />
                            )}
    
                            {listNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={this.markAsRead(notification.id)}
                                />
                            ))}
                        </ul>
    
    
                    </div>
                )}
            </div>
        )
    }
};

export default Notifications;