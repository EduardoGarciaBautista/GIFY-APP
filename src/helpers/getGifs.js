 export const getGifs = async (category) => {

    const key = '9jyHoCZbTjUX3XiZGx3P3eSM03cwOiBi';

    const url = `https://api.giphy.com/v1/gifs/search?q=${category.replace(' ', '+')}&limit=10&api_key=${key}`;

    const result = await fetch(url);

    const { data } = await result.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}