import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('ui action creators return expected values', () => {
    test('login', () => {
      const returnVal = login('test@test.com', 'pass123');

      expect(returnVal).toHaveProperty('type', LOGIN);
      expect(returnVal.user).toHaveProperty('email', 'test@test.com');
      expect(returnVal.user).toHaveProperty('password', 'pass123');
    });

    test('logout', () => {
      const returnVal = logout();

      expect(returnVal).toHaveProperty('type', LOGOUT);
    });

    test('displayNotificationDrawer', () => {
      const returnVal = displayNotificationDrawer();

      expect(returnVal).toHaveProperty('type', DISPLAY_NOTIFICATION_DRAWER);
    });

    test('hideNotificationDrawer', () => {
      const returnVal = hideNotificationDrawer();

      expect(returnVal).toHaveProperty('type', HIDE_NOTIFICATION_DRAWER);
    });
  });