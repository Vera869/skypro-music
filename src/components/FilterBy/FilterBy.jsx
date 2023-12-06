import { useState } from "react"
import {genreList} from "../FilterBy/ListGenre.jsx"
import {yearList} from "../FilterBy/ListYear.jsx"
import {authorList} from "../FilterBy/listAuthor.jsx"
import * as Sty from "../FilterBy/StyledFilter.js"

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
   return (<><Sty.FilterButtonList>
               <Sty.FilterButton className="_btn-text" onClick={toggleOpenAuthor}>
                     исполнителю
                  </Sty.FilterButton>
                  {openAuthor && authorList()}
            </Sty.FilterButtonList>
            <Sty.FilterButtonList>
               <Sty.FilterButton className="_btn-text" onClick={toggleOpenYear}>
                  году выпуска 
               </Sty.FilterButton>
               {openYear && yearList()}
            </Sty.FilterButtonList>
            <Sty.FilterButtonList>
               <Sty.FilterButton className="_btn-text" onClick={toggleOpenGenre}>
                   жанру</Sty.FilterButton>
                {openGenre && genreList()}
            </Sty.FilterButtonList>
          </>
   )
}
export default FilterBy


