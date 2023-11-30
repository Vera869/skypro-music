

function FilterButtons (onClick) {
  
  return ( <>
            <div className="filter__title">Искать по:</div>
            <div onClick={onClick} className="filter__button button-author _btn-text">исполнителю</div>
            <div onClick={onClick} className="filter__button button-year _btn-text">году выпуска</div>
            <div onClick={onClick} className="filter__button button-genre _btn-text">жанру</div>
          </>)
}       
export default FilterButtons