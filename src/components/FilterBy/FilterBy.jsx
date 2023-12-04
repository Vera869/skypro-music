import "./FilterBy.css"
import { useState } from "react"

function FilterBy () {

   let authorList = () => {
      return (
        <div className="list">
        <ul className="list-author">
          <li className="list-el">Michel Jackson</li>
          <li className="list-el">Frank Sinstra</li>
          <li className="list-el">Calvin Harris</li>
          <li className="list-el">Zhu</li>
          <li className="list-el">Arctic Monke</li>
        </ul>
      </div>
      )
    }
   let yearList = () => {
      return (
        <div className="list">
        <ul className="list-year">
          <li className="list-el">2001</li>
          <li className="list-el">1969</li>
          <li className="list-el">1987</li>
          <li className="list-el">2014</li>
          <li className="list-el">2022</li>
        </ul>
      </div>
      )
    }
   let genreList = () => {
      return (
        <div className="list">
        <ul className="list-genre">
          <li className="list-el">Rock</li>
          <li className="list-el">Jazz</li>
          <li className="list-el">Disco</li>
          <li className="list-el">Indi</li>
          <li className="list-el">Classic</li>
        </ul>
      </div>
      )
    }
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


