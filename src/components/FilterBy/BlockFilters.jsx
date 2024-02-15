import * as S from '../FilterBy/StyledFilter.js'
import { useState } from 'react'
import { CriterionButton } from './FilterButton.jsx'
import { FilterList } from './listFilter.jsx'
import { useGetAllTracksQuery } from '../../Services/index.js'
import { useSelector } from 'react-redux'

export const CenterblockFilter = ({ tracks }) => {
  const [activeCriterion, setActiveCriterion] = useState(null)
//   const data = useSelector((state) => state.tracks.tracks)
  const data = tracks
//   const { data } = useGetAllTracksQuery()
//   console.log(data);
  const authorTrack = data.map((item) => item.author)
  const author = Array.from(new Set(authorTrack))

  const genreTrack = data.map((item) => item.genre)
  const genre = Array.from(new Set(genreTrack))

  const years = ['Сначала новые', 'Сначала старые']

  const handleCriterionClick = (criterionName) => {
    if (activeCriterion === criterionName) {
      setActiveCriterion(null)
    } else {
      setActiveCriterion(criterionName)
    }
  }

  return (
    <S.FilterButtonList>
      <div>
        <CriterionButton
          Criterion={'Исполнители'}
          isActive={activeCriterion === 'Исполнители'}
          onClick={() => handleCriterionClick('Исполнители')}
        />
        {activeCriterion === 'Исполнители' && (
          <FilterList data={author} criterion={'Исполнители'} />
        )}
      </div>
      <div>
        <CriterionButton
          criterion={'Год выпуска'}
          isActive={activeCriterion === 'Год выпуска'}
          onClick={() => handleCriterionClick('Год выпуска')}
        />
        {activeCriterion === 'Год выпуска' && (
          <FilterList data={years} criterion={'Год выпуска'} />
        )}
      </div>
      <div>
        <CriterionButton
          criterion={'Жанры'}
          isActive={activeCriterion === 'Жанры'}
          onClick={() => handleCriterionClick('Жанры')}
        />
        {activeCriterion === 'Жанры' && (
          <FilterList data={genre} criterion={'Жанры'} />
        )}
      </div>
    </S.FilterButtonList>
  )
}
