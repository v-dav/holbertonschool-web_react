import { markAsRead, setNotificationFilter, } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notification action creators return expected values', () => {
    test('markAsRead', () => {
    const returnVal = markAsRead(1);

    expect(returnVal).toHaveProperty('type', MARK_AS_READ);
    expect(returnVal).toHaveProperty('index', 1);
    });

    test('setNotificationFilter', () => {
    const { DEFAULT, URGENT } = NotificationTypeFilters;

    let returnVal = setNotificationFilter(DEFAULT);

    expect(returnVal).toHaveProperty('type', SET_TYPE_FILTER);
    expect(returnVal).toHaveProperty('filter', DEFAULT);

    returnVal = setNotificationFilter(URGENT);

    expect(returnVal).toHaveProperty('type', SET_TYPE_FILTER);
    expect(returnVal).toHaveProperty('filter', URGENT);
    });
});