import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" html={{}} value="" />);
  });

  it('renders correct html with dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{}} value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correct html with dummy html prop', () => {
    const dummyHtml = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={dummyHtml} />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(dummyHtml);
  });
});