import React from 'react';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import "./App.css"

function App() {

    return (
        <>
            <Notifications />

            <div className="App">
                <Header />
            </div>
            
            <div className="App-body">
                <Login />
            </div>

            <div className="App-footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
