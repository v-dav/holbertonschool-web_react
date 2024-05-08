import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe("Header component", () => {
    it("renders without crashing", () => {
        shallow(<Header />);
    });

    it("renders img and h1", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});;

