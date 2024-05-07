import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


describe("Login component", () => {
    it("renders without crashing", () => {
        shallow(<Login />)
    });
    it("renders input and label", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);

    });
})