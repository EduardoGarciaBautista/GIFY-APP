import { getGifs } from '../../helpers/getGifs'

describe('test for getGifs', () => {
   
    
    test('should return url array', async () => {
        const gifs = await getGifs('Comida');


        expect(gifs.length).toBe(10);


    });


    test('should return an empty array', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });

});