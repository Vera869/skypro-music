import { useState } from "react"
import {genreList} from "../FilterBy/ListGenre.jsx"
import {yearList} from "../FilterBy/ListYear.jsx"
import {authorList} from "../FilterBy/listAuthor.jsx"
import * as S from "../FilterBy/StyledFilter.js"

function FilterBy () {

   const [openAuthor, setOpenAuthor] = useState(false);
   const [openYear, setOpenYear] = useState(false);
   const [openGenre, setOpenGenre] = useState(false);
  
      function toggleOpenAuthor () {
        console.log("Author");
        setOpenAuthor(!openAuthor);
        setOpenYear(false);
        setOpenGenre(false);
      }
      function toggleOpenYear () {
         console.log("Year");
         setOpenYear(!openYear);
         setOpenAuthor(false);
         setOpenGenre(false);
       }
       function toggleOpenGenre () {
         console.log("Genre");
         setOpenGenre(!openGenre);
         setOpenYear(false);
         setOpenAuthor(false);
       }
   return (<><S.FilterButtonList>
               <S.FilterButton className="_btn-text" onClick={toggleOpenAuthor}>
                     исполнителю
                  </S.FilterButton>
                  {openAuthor && authorList()}
            </S.FilterButtonList>
            <S.FilterButtonList>
               <S.FilterButton className="_btn-text" onClick={toggleOpenYear}>
                  году выпуска 
               </S.FilterButton>
               {openYear && yearList()}
            </S.FilterButtonList>
            <S.FilterButtonList>
               <S.FilterButton className="_btn-text" onClick={toggleOpenGenre}>
                   жанру</S.FilterButton>
                {openGenre && genreList()}
            </S.FilterButtonList>
          </>
   )
}
export default FilterBy


