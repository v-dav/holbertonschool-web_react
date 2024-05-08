export function getFullYear() {
    let currentDate = new Date()
    return currentDate.getFullYear()
}

export function getFooterCopy(isIndex) {
    
    return isIndex ? "Holberton School" : "Holberton School main dashboard";

}

export function getLatestNotification() {
    return "<strong>Urgent requirment</strong> - complete by EOD"
}