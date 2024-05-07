import React from 'react';
import PropTypes from 'prop-types';

import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from '../utils/utils';
import "./App.css"

import CourseList from "../CourseList/CourseList"

function App({ isLoggedIn }) {

    const listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
    ]

    const listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ];

    return (
        <>
            <Notifications listNotifications={listNotifications}/>

            <div className="App">
                <Header />
            </div>
            
            <div className="App-body">{!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses}/>}</div>

            <div className="App-footer">
                <Footer />
            </div>
        </>
    );
}

App.defaultProps = {
    isLoggedIn: false
}

App.propTypes = {
    isLoggedIn: PropTypes.bool
}


export default App;
