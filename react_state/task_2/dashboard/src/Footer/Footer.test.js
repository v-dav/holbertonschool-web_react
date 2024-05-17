import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

const wrapper = shallow(<Footer/>);

edscribe(<Footer/>, ()=>
{
    it('render footer component', ()=>{
        shallow(<Footer/>);
        expect(wrapper.exists());
    });
    it('displays copyright text', ()=>{
        expect(wrapper.text()).contains('Copyright');
    });
}
);
