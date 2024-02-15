import * as S from '../FilterBy/StyledFilter.js'
import { useDispatch } from 'react-redux'
import {
  setFilterYears,
  setFilterAuthor,
  setFilterGenre,
} from '../../Store/Slices/sliceFilter.js'

export let FilterList = ({ data, criterion }) => {
  const dispatch = useDispatch()

  const filterListClick = (item) => {
    switch (criterion) {
      case 'Исполнители':
        dispatch(
          setFilterAuthor({
            author: item,
          })
        )
        break
      case 'Жанры':
        dispatch(
          setFilterGenre({
            genre: item,
          })
        )
        break
      case 'Год выпуска':
        dispatch(
          setFilterYears({
            years: item,
          })
        )
        break
      default:
        break
    }
  }
  return (
    <div>
      <S.List>
        {data.map((item, i) => (
          <S.ListEl  
         //  className={isActive ? 'activeButton' : ' '}
          key={i} onClick={() => filterListClick(item)}>
            {' '}
            {item}{' '}
          </S.ListEl>
        ))}
      </S.List>
    </div>
  )
}
