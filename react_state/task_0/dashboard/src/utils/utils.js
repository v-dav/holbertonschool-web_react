import React from "react";
export function getFullYear() {
    const Year = new Date().getFullYear();
    return Year;
}
export function getFooterCopy(isIndex){
    if(isIndex) { return 'Holberton School'; }
    return 'Holberton School main dashboard';
}

export function getLatestNotification() {
    return ("<p><strong>Urgent requirement</strong> - complete by EOD</p>");
}