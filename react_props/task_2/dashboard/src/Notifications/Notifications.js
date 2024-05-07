import React from 'react';
import './Notifications.css'
import close from '../assets/close.png'
import {getLatestNotification} from '../utils/utils'
import NotificationItem from './NotificationItem'

function Notifications() {

    function handlerClose() {
        console.log("Close button has been clicked")
    }
    return (
        <div className='Notifications' style={{position:"relative"}}>
            <p>Here is the list of notifications</p>

            <ul>
                <NotificationItem data-priority='default' value="New course available" />
                <NotificationItem data-priority='urgent' value="New resume available" />
                <NotificationItem type="default" html={{__html: getLatestNotification()}} />
            </ul>

            <button
                onClick={handlerClose} 
                style={{
                    display:"flex",
                    border:"none",
                    cursor:"pointer",
                    position: "absolute",
                    right:"10px",
                    top:"10px"}}
                    aria-label='Close'>
                    <img style={{width: "15px"}} src={close} alt="button close" />
            </button>
        </div>
    )
}

export default Notifications