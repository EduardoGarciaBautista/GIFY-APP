import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/dom';
import { GifGridItem } from '../../Components/GifGridItem';



describe('Test for GifGridItem component', () => {

    const title = 'Title test';

    const url = 'https://url.img.com';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should match component with snapshot', () => {
        
     

        expect(wrapper).toMatchSnapshot();
        
    });
    test('should have p wit title variable', () => {
        
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    });

    test('should have an image equal to props url', () => {
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);

        expect(img.prop('alt')).toBe(title)

    });

    test('should have animate__fadeIn class', () => {

        const div = wrapper.find('div');
        const className = 'animate__fadeIn';

        expect(div.hasClass(className)).toBe(true)
        
    });
    
})