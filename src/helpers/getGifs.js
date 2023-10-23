export const getGifs = async (category) => {
    const apiKey = '8QieHB8JR0msLbSwwov9pwz8rJL0MeVl';
    const host = 'https://api.giphy.com';
    const limit = 10;
    const url = `${host}/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=${limit}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};