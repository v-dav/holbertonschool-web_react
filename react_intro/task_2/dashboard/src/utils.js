export function getFullYear() {
  const d = new Date();
  return d.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School'
  } else {
    return 'Holberton School Main Dashboard'
  }
}

export function getLatestNotification() {
  return {__html: '<strong>Urgent requirement</strong> - complete by EOD'} 
}
