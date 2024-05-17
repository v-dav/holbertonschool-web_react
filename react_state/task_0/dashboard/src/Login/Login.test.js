import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

const wrapper = shallow(<Login/>);

describe(<Login/>, ()=>
{
    it('renders login div', ()=>{
        shallow(<Login/>);
        expect(wrapper.exists());
    });
    it('renders 2 input and 2 label', ()=>{
     expect(wrapper.find('input').length).toEqual(2);
     expect(wrapper.find('label').length).toEqual(2);
    });
}); 
