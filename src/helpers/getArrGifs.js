

export const getArrGifs =async(Categoria)=> {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(Categoria) }&limit=10&api_key=3enA7rbUd95herOu2DmFinlXSOdi2Box`;
    const resp = await fetch(url)
    const {data} = await resp.json();

    const ArrGifs = data.map((x)=>{
        return {
               id: x.id,
               title: x.title,
               url: x.images?.downsized_medium.url

               }    

    })

    
    return ArrGifs;
}