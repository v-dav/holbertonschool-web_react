import React from 'react';
import { expect as expect2 } from 'chai';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect2(wrapper.exists());
  });
  test('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');

    expect2(li.props()).to.have.property('data-notification-type', 'default');
    expect2(li.text()).to.equal('test');
  });

  test('renders with correct inner html', () => {
    const wrapper = shallow(
      <NotificationItem id={0} type='urgent' html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');
    
    expect(li.props()).toHaveProperty('dangerouslySetInnerHTML', {
      __html: '<u>test</u>'
    });
  });
});