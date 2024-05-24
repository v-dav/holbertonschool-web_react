import notificationsData from '../../../../notifications.json';

const getAllNotificationsByUser = (userID) => {
    const notifs = notificationsData.filter(item =>  item.author.id === userID);
    const contexts = notifs.map(item => item.context);
    return contexts;
}

export default getAllNotificationsByUser;
