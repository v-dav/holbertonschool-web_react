import React, { Component } from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('correctly logs component name', () => {
    console.log = jest.fn();

    const LoginWithLogging = WithLogging(Login);
    const wrapper = mount(<LoginWithLogging />);

    expect(console.log).toHaveBeenCalledWith(`Component Login is mounted`);

    wrapper.unmount();

    expect(console.log).toHaveBeenCalledWith(
      `Component Login is going to unmount`
    );

    expect(console.log).toHaveBeenCalledTimes(2);
  });
});