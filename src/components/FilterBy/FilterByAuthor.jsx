import { useState } from "react";

function FilterByAuthor () {
   const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick(); 
  };

  return (<>
    <div onClick={onClick} className="filter__button filter-author _btn-text">году выпуска</div>
    <div onClick={handleButtonClick} className = {`filter__button filter-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>исполнителю</div>
    </>
  );
}
export default FilterByAuthor