import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

  const [previousTerms, setPreviousTerms] = useState(['ejemplo']);

  const handleTermClinked = (term: string)=>{
    console.log({term});
  }

  const handleSearch= (query:string)=>{
     query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    // const gifs = await getGifsByQuery(query);
    // setGifs(gifs);
    
  }

  return (
    <>
        <CustomHeader title="GIFs App" description="Encuentra los mejores GIFs aquí"></CustomHeader>

         {/* search */}
        <SearchBar placeholder="Buscar GIFs..." onQuery={ handleSearch}></SearchBar>

        {/* busquedas previas */}
        <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClinked}></PreviousSearches>

        {/* gifs */}
        <GifList gifs={mockGifs}></GifList>
    
    </>
  )
}
