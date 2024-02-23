import { useDispatch} from "react-redux";
import { setFilters } from "../../Store/Slices/sliceTrack";

import * as S from "./StyledSearchFiltered";

function SearchBlock() {
  const dispatch = useDispatch();

  const onChandeSearchValue = (value) => {
    dispatch(setFilters({ nameFilter: "search", valueFilter: value }));

    console.log(value);
  };
  return (
    <S.CenterBlockSearch >
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(event) =>
          onChandeSearchValue(event.target.value.toLocaleLowerCase())
        }
      />
    </S.CenterBlockSearch >
  );
}
export default SearchBlock;