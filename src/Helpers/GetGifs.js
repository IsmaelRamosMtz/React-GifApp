
export const getGifs = async ( cat ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YrL0wbecZ2AOBuleUGRBKrfspAU0Jx91&q=${encodeURI(cat)}&limit=10`;
    const resp = await fetch(url);
    // Destrcturamos para que nos mande la data del objeto data (data es una propiedad del objeto data)
    const { data } = await resp.json();
    // console.log('es la data', data);
    // console.log('es la data de la data', data.data);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium
        }
    })
    // console.log(gifs);
    return gifs;
}
