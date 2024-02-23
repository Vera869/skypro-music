import * as S from '../FilterBy/StyledFilter.js'
import { useState } from 'react'
import { CriterionButton } from './FilterButton.jsx'
import { FilterList } from './listFilter.jsx'
import { useGetAllTracksQuery } from '../../Services/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { setIsFiltered } from '../../Store/Slices/sliceFilter.js'
import { useEffect } from 'react'
import { setTrackListForFilter } from '../../Store/Slices/sliceTrack.js'

export const CenterblockFilter = ({ tracks }) => {
  
  
  // const handleCriterionClick = (criterionName) => {
  //   if (activeCriterion === criterionName) {
  //     setActiveCriterion(null)
  //   } else {
  //     setActiveCriterion(criterionName)
  //   }
  // }

  return (
    <S.FilterButtonList>
      <div>
        <CriterionButton
          Criterion={'Исполнители'}
          // isActive={activeCriterion === 'Исполнители'}
          // onClick={() => handleCriterionClick('Исполнители')}
        />
        {activeCriterion === 'Исполнители' && (
          <FilterList  criterion={'Исполнители'} />
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
