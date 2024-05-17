import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from "aphrodite/no-important";
import { user as defaultUser, AppContext } from './AppContext';

const styles = StyleSheet.create({
  'App': {
    textAlign: 'left'
  }
});

class  App extends React.Component {
  constructor (props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {
        this.setState({ user: defaultUser });
      }
    }
  }
  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  static propTypes = {
  };
  
  static defaultProps = {
  };
  
  handleDisplayDrawer =() => { this.setState({ displayDrawer: true }); }

  handleHideDrawer = () => { this.setState({ displayDrawer: false }); }

  componentDidMount() {
    window.addEventListener('keydown', this.handleLogout);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleLogout);
  }

  handleLogout(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }
  render(){
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];


  
  const htmlObj = {
    __html: getLatestNotification(),
  };
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New course available'},
    {id: 3, type: 'urgent', html: htmlObj}
  ];

  const { displayDrawer } = this.state;
  return (
    <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
    <Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div className={css(styles['App'])}
       displayDrawer={displayDrawer}
       handleDisplayDrawer={this.handleDisplayDrawer}
       handleHideDrawer={this.handleHideDrawer} />
        <Header />
        {this.state.user.isLoggedIn ? ( <BodySectionWithMarginBottom title="Course list"> <CourseList listCourses={listCourses}/> </BodySectionWithMarginBottom>)
        :  (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn}/>
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>it's the holidays!</p>
          </BodySection>
        <Footer className='App-footer' />
      </div>
    </Fragment>
  );
}
}


export default App;
