
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
// import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {
  const{handleSearch,handleTermClinked,previousTerms,gifs} = useGifs()
  
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
