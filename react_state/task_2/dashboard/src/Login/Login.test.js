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
    it('form working', () => {
        const email = wrapper.find('#email');
        const password = wrapper.find('#password');
        email.simulate('change', {
          target: { name: 'email', value: 'something@domain.com' },
        });
        let submit = wrapper.find("form button[type='submit']");
        expect(submit.prop('disabled')).toEqual(true);
        password.simulate('change', {
          target: { name: 'password', value: 'password' },
        });
        submit = wrapper.find("form button[type='submit']");
        expect(submit.prop('disabled')).toEqual(false);
      });
}); 
