import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear
test('getFullYear returns current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy
test('getFooterCopy returns correct footer copy for index', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns correct footer copy for non-index', () => {
  expect(getFooterCopy(false)).toBe('Holberton School Main Dashboard');
});

// Test for getLatestNotification
test('getLatestNotification returns correct HTML string', () => {
  const latestNotification = getLatestNotification();
  expect(latestNotification).toEqual({__html: '<strong>Urgent requirement</strong> - complete by EOD'});
});
