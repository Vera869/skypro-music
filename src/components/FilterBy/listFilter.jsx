import * as S from '../FilterBy/StyledFilter.js'
import { useDispatch } from 'react-redux'
import {
  setFilterYears,
  setFilterAuthor,
  setFilterGenre,
} from '../../Store/Slices/sliceFilter.js'

export let filterList = ({ data, criterion }) => {
  const dispatch = useDispatch()

  const filterListClick = (item) => {
    switch (criterion) {
      case 'Год выпуска':
        dispatch(
          setFilterYears({
            years: item,
          })
        )
        break
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
      default:
        break
    }
  }
  return (
    <div>
      <S.List>
        {data.map((item, i) => (
          <S.ListEl key={i} onClick={() => filterListClick(item)}>
            {' '}
            {item}{' '}
          </S.ListEl>
        ))}
      </S.List>
    </div>
  )
}
