import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('renders without crashing', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.exists());
  });

  test('copy text contains at least "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    const p = wrapper.find('p');

    const re = /Copyright/;

    expect(re.test(wrapper.text()));
  });

  test('contact link NOT shown without user logged in', () => {
    const wrapper = shallow(<Footer />);
    const contact = wrapper.find('[data-testid="contact"]');

    expect(contact).to.have.lengthOf(0);
  });

  test('contact link shown if user logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );

    const contact = wrapper.find('[data-testid="contact"]');

    expect(contact).to.have.lengthOf(1);
  });
});