import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li data='urgent' dangerouslySetInnerHTML={getLatestNotification()}></li>
      </ul>
      <button style={{
        textAlign: "right",
        position: 'absolute',
        border: "none",
        background: "none",
        cursor: "pointer",
        top: "0px",
        right: "0px"
      }} aria-label='Close'
        onClick={() => console.log('Close button has been clicked')}>X</button>
    </div>
  );
}
