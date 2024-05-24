import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsRead = (index) => 
dispatch({ type: MARK_AS_READ, index});

export const setNotificationFilter = (filter) => 
dispatch({ type: SET_TYPE_FILTER, filter});
