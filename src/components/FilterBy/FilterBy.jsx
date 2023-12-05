import "./FilterBy.css"
import { useState } from "react"
import {genreList} from "../FilterBy/ListGenre.jsx"
import {yearList} from "../FilterBy/ListYear.jsx"
import {authorList} from "../FilterBy/listAuthor.jsx"

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
   return (<><div className="filter_button-list">
               <div className="filter__button button-author _btn-text" onClick={toggleOpenAuthor}>
                     исполнителю
                  </div>
                  {openAuthor && authorList()}
            </div>
            <div className="filter_button-list">
               <div className="filter__button button-year _btn-text" onClick={toggleOpenYear}>
                  году выпуска 
               </div>
               {openYear && yearList()}
            </div>
            <div className="filter_button-list">
               <div className="filter__button button-genre _btn-text" onClick={toggleOpenGenre}> жанру</div>
                {openGenre && genreList()}
            </div>
          </>
   )
}
export default FilterBy


