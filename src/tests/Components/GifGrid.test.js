import React from 'react';
import '@testing-library/jest-dom';
import {shallow}  from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { default: GifGrid } = require("../../Components/GifGrid");

jest.mock('../../hooks/useFetchGifs');



describe('test for GifGrid', () => {
   
    const category = 'MOUSE';
    


    test('should component be equal to snapshot', () => {
       
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });
    

    test('should show item when images are loaded', () => {

        const gifs = [{
            id: 'fdgfsd',
            url: 'https://test.com',
            title: 'Test Mock'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
   
    });
    

});