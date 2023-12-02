import "./FilterBy.css"
import { useState } from "react";


function authorList () {
   return (
     <div className="list">
     <ul className="author">
       <li>Michel Jackson</li>
       <li>Frank Sinstra</li>
       <li>Calvin Harris</li>
       <li>Zhu</li>
       <li>Arctic Monke</li>
     </ul>
   </div>
   )
 }

function FilterByAuthor ({authorList}) {

    const [open, setOpen] = useState(false);
  
      function toggleOpen () {
        console.log("Hello");
        setOpen(!open);
      }
   return (<><div className="filter__button button-author _btn-text" onClick={toggleOpen}>
             исполнителю
          </div>
          {open ? [authorList] : ""}
          </>
   )
}
export default FilterByAuthor