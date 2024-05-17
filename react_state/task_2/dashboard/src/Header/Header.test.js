import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

const wrapper = shallow(<Header />);

describe('<Header />', () => {
  it('render Shell', () => {
    shallow(<Header />);
    expect(wrapper.exists());
  });
  it('renders App-header', () => {
    const image = wrapper.find('img');
    const h1 = wrapper.find('h1');

    expect(image.exists());
    expect(h1.exists());
  });
});