import "./FilterBy.css"
// import { useState } from "react";
// import {FilterMenuAuthor} from "./FilterMenuAuthor.jsx";
// import {FilterMenuYear} from "./FilterMenuYear";
// import {FilterMenuGenre} from "./FilterMenuGenre";
// import FilterByAuthor from "./FilterByAuthor";
// import FilterByYear from "./FilterByYear";
// import FilterByGenre from "./FilterByGenre";

// function FilterBy() {
//     const [visible, setVisible] = useState(null)
//     const toggleVisibility = (filter) => {
//       setVisible(visible === filter ? null : filter)
//     }
//     // const [isActive, setIsActive] = useState(false);
//     // const handleButtonClick = () => {
//     //   setIsActive(!isActive);
//     // };
//     const handleButtonClick = (filter) => {
//       setVisible((currentVisible) => (currentVisible === filter ? null : filter));
//     };
//     return (
//       <div className="centerblock__filter filter">
//         <div className="filter__title">Искать по:</div>
//         <div><FilterByAuthor onClick={() => {toggleVisibility("author"); handleButtonClick() }}/>
//         {visible === "author" && <FilterMenuAuthor/>}</div>
//         <div><FilterByYear onClick={() => {toggleVisibility("year"); handleButtonClick() }}/>
//         {visible === "year" && <FilterMenuYear/>}</div>
//         <div><FilterByGenre onClick={() => {toggleVisibility("genre"); handleButtonClick() }}/>
//         {visible === "genre" && <FilterMenuGenre/>}</div>
//      </div>
//     );
//   }
// export default FilterBy
function FilterBy ({filterName, isOpened, filterList, action}) {
  return (
    <div onClick={action}>
      <div className="filter__button _btn-text">{filterName}</div>
      {isOpened && <div>{filterList}</div>}
    </div>
  )
} 
export default FilterBy