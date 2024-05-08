import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from '../utils/utils';
import "./App.css"

import CourseList from "../CourseList/CourseList"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCourses: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 },
            ],
            listNotifications: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
              ]
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.handleKeyDown)
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    }

    render() {
        const { isLoggedIn } = this.props;
        const { listCourses, listNotifications } = this.state;

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
}

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
}


export default App;
