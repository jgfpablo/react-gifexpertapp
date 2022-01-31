export const getGifs = async(category) =>{
    console.log(category);
    try {
        
      const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=hMHxIovFdRpvI8MWwMOrRNaR7FHdwkwa`

      const resp = await fetch(url);
      const {data} = await resp.json();

      const gifs = data.map( img => {
          return {
              id:img.id,
              title:img.title,
              url: img.images?.downsized_medium.url
          }
      })
      
      return gifs;

    } catch (error) {
        console.warn('ocurrio un error',error)
    }
    
  }