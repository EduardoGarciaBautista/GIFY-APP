import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { default: AddCategory } = require("../../Components/AddCategory");


describe('Tes for AddCategory', () => {
    const setcategories = jest.fn();

    let wrapper = shallow(<AddCategory setcategories={setcategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();

        wrapper = shallow(<AddCategory setcategories={setcategories}/>);
    });
   
    test('should compare with snapshot', () => {
    
        expect(wrapper).toMatchSnapshot();

    });
        
    test('should change input text', () => {
       const input = wrapper.find('input');
       
       const value = 'Hola mundo';

       input.simulate('change', {target:{value}});
    });

    test('should not call set state', () => {
    
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setcategories).not.toHaveBeenCalled();

    });

    test('should call setcategorie and clear input box', () => {
        
        const value = 'bubbaloo';

        wrapper.find('input').simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setcategories).toHaveBeenCalled();

        expect(setcategories).toHaveBeenCalledTimes(1);

        expect(setcategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
    
});