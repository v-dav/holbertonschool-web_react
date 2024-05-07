import {shallow} from 'enzyme'
import React from 'react';
import App from './App';


describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists).toEqual(true);
    });
});
