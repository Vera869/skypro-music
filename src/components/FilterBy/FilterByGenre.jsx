import { useState } from "react";

function FilterByGenre () {

  let genreList = () => {
    return (
      <div className="list">
      <ul className="genre">
        <li>Rock</li>
        <li>Jazz</li>
        <li>Disco</li>
        <li>Indi</li>
        <li>Classic</li>
      </ul>
    </div>
    )
  }
 
  const [open, setOpen] = useState(false);

    function toggleOpen () {
      console.log("Hello");
      setOpen(!open);
      return (<><div className="filter__button button-genre _btn-text" onClick={toggleOpen}>
            жанру 
          </div> {open ? <genreList/> : ""}
          </>
      )
    };
   return <div className="filter__button button-genre _btn-text" onClick={toggleOpen}> жанру</div>
   
 }
 export default FilterByGenre