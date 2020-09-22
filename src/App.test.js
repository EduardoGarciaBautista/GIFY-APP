import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from './App';


describe('Tests for App', () => {
    

    test('should Match with snapshot', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a categories list', () => {

        const categories= ['Goku'];

        const wrapper = shallow(<GifExpertApp 
            defaultCategories={categories}/>);

            expect(wrapper).toMatchSnapshot();

            expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    


})