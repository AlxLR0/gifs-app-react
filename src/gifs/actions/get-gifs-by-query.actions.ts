import axios from "axios";

export const getGifsByQuery = async(query: string)=>{

    const response = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{
            q:query,
            limit:10,
            lang:'es'

        }
    });

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=XzA6oqALFxBHpWPxZhzaReQeabQJUCuG&q=${query}&limit=10&lang=es`);
}