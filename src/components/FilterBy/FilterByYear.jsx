import { useState } from "react";

function FilterByYear () {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick(); 
  };

  return (<>
    <div onClick={onClick} className="filter__button filter-year _btn-text">году выпуска</div>
    <div onClick={handleButtonClick} className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>году выпуска</div>
    </>
  );
}
export default FilterByYear