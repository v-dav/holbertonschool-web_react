import React from 'react';
import './Notifications.css'
import close from '../assets/close.png'
import {getLatestNotification} from '../utils/utils'

function Notifications() {

    function handlerClose() {
        console.log("Close button has been clicked")
    }
    return (
        <div className='Notifications' style={{position:"relative"}}>
            <p>Here is the list of notifications</p>

            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
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