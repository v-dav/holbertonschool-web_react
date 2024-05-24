import fetch from 'node-fetch';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const login = (email, password) => 
dispatch({
    type: LOGIN,
    user: { email, password }
});

export const logout = () => 
dispatch({ 
  type: LOGOUT 
});

export const displayNotificationDrawer = () => 
dispatch({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => 
dispatch({
  type: HIDE_NOTIFICATION_DRAWER
});

export const loginSuccess = () =>
dispatch({
  type: LOGIN_SUCCESS
});

export const loginFailure = () =>
dispatch({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => {
  login(email, password);

  fetch('/login-success.json')
  .then((res) => loginSuccess())
  .catch((error) => loginFailure());
};