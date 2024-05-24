import { normalize, schema } from 'normalizr';
import notificationsData from '../../dist/notifications.json';

// Normalizr schema
const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid'
  }
);
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

export const normalizedNotifications = normalize(notificationsData, new schema.Array(notification));

export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedNotifications.entities;

  const userNotifications = [];

  for (let key in notifications)
    if (notifications[key].author === userId)
      userNotifications.push(messages[notifications[key].context]);
    
    return userNotifications;
}
