import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


const wrapper = shallow(<App />);

describe('<App />', () => {
  it('render App component', () => {
    shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders App-header', () => {
    expect(wrapper.contains(<Header />));
  });
  it('renders App-body', () => {
    expect(wrapper.contains(<Login />));
  });
  it('renders App-footer', () => {
    expect(wrapper.contains(<Foote />));
  });

  it("<App /> doesn't contain <CourseList />", () => {
		expect(wrapper.contains(<CourseList />)).to.equal(false);
	});

});

describe("Testing the <App /> when isLoggedIn is true", () => {
	let props = {
		isLoggedIn: true,
	};

	let component = shallow(<App {...props} />);
	expect(component.contains(<Login />)).to.equal(false);
	expect(component.contains(<CourseList />)).to.equal(true);

  describe('logout alert', () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, 'alert');

    const wrapper = shallow(<App logOut={myLogOut} />)

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
});

describe('Example component', () => {
  it('should have a default state of displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('should update state of displayDrawer to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('should update state of displayDrawer to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
  it('displayDrawer toggle handleDisplayDrawer and handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});
