import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
// import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClinked = (term: string)=>{
    console.log({term});
  }

  const handleSearch= async(query:string)=>{
     query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    // const gifs = await getGifsByQuery(query);
    // setGifs(gifs);

    const gifs= await getGifsByQuery(query);
    
    console.log({gifs});

    setGifs(gifs);
    
    
  }

  return (
    <>
        <CustomHeader title="GIFs App" description="Encuentra los mejores GIFs aquí"></CustomHeader>

         {/* search */}
        <SearchBar placeholder="Buscar GIFs..." onQuery={ handleSearch}></SearchBar>

        {/* busquedas previas */}
        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClinked}></PreviousSearches>

        {/* gifs */}
        <GifList gifs={gifs}></GifList>
    
    </>
  )
}
