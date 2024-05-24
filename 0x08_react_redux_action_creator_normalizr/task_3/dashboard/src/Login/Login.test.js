import React from 'react';
import { shallow } from 'enzyme';
import { expect as expect2 } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

import Login from './Login';

describe('Login', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Login />);

    expect2(wrapper.exists());
  });

  test('renders two input tags', () => {
    const wrapper = shallow(<Login />);

    const inputs = wrapper.find('input');
    const labels = wrapper.find('label');

    expect2(inputs).to.have.lengthOf(3);
    expect2(labels).to.have.lengthOf(2);;
  });

  test('submit is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submit = wrapper.find('[data-testid="submit"]');

    expect(submit.length).toBe(1);
    expect(submit.props()).toHaveProperty('disabled', true);
  });

  test('submit is enabled when inputs are not empty', () => {
    const wrapper = shallow(<Login />);
    const email = wrapper.find('input#email');
    const password = wrapper.find('input#password');
    let submit = wrapper.find('[data-testid="submit"]');

    expect(email.length).toBe(1);
    expect(password.length).toBe(1);
    expect(submit.length).toBe(1);

    expect(wrapper.state()).toHaveProperty('enableSubmit', false);
    expect(submit.props()).toHaveProperty('disabled', true);

    email.simulate('change', { target: { value: 'email@email.com' } });
    expect(wrapper.state()).toHaveProperty('enableSubmit', false);
    submit = wrapper.find('[data-testid="submit"]');
    expect(submit.props()).toHaveProperty('disabled', true);

    password.simulate('change', { target: { value: 'pass123' } });
    expect(wrapper.state()).toHaveProperty('enableSubmit', true);
    submit = wrapper.find('[data-testid="submit"]');
    expect(submit.props()).toHaveProperty('disabled', false);
  });
});