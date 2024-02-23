// import { useState } from 'react'
// import { genreList } from '../FilterBy/ListGenre.jsx'
// import { yearList } from '../FilterBy/ListYear.jsx'
// import { authorList } from '../FilterBy/listAuthor.jsx'
// import * as S from '../FilterBy/StyledFilter.js'

// function FilterBy() {
//   const [openAuthor, setOpenAuthor] = useState(false)
//   const [openYear, setOpenYear] = useState(false)
//   const [openGenre, setOpenGenre] = useState(false)

//   function toggleOpenAuthor() {
//     console.log('Author')
//     setOpenAuthor(!openAuthor)
//     setOpenYear(false)
//     setOpenGenre(false)
//   }
//   function toggleOpenYear() {
//     console.log('Year')
//     setOpenYear(!openYear)
//     setOpenAuthor(false)
//     setOpenGenre(false)
//   }
//   function toggleOpenGenre() {
//     console.log('Genre')
//     setOpenGenre(!openGenre)
//     setOpenYear(false)
//     setOpenAuthor(false)
//   }

// import React, { useEffect } from 'react'
import * as S from '../FilterBy/StyledFilter.js'
import { useState } from 'react'
import { useGetAllTracksQuery } from '../../Services/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { clearTheFilter, setFilters } from '../../Store/Slices/sliceTrack.js'
import { useEffect } from 'react'

function FilterBy() {
  const { data = [] } = useGetAllTracksQuery()
  const [genre, setGenre] = useState([])
  const [dataTrack, setDataTrack] = useState([])
  const dispatch = useDispatch()

  const [filter, setShowFilter] = useState(false)

  const [filterYears, setYearsFilter] = useState(false)

  const [filterGenre, setGenreFilter] = useState(false)

  const showFilterAuthor = () => {
    setShowFilter(!filter)
    setYearsFilter(false)
    setGenreFilter(false)
  }

  const showFilterYears = () => {
    setYearsFilter(!filterYears)
    setShowFilter(false)
    setGenreFilter(false)
  }

  const showFilterGenre = () => {
    setGenreFilter(!filterGenre)
    setShowFilter(false)
    setYearsFilter(false)
  }

  useEffect(() => {
    if (data.length > 0) {
      const ganreSet = new Set()
      data.forEach((element) => {
        ganreSet.add(element.genre)
      })
      console.log(ganreSet)
      setGenre(Array.from(ganreSet))
    }
    if (data.length > 0) {
      const dataSet = new Set()
      data.forEach((element) => {
        dataSet.add(element.release_date)
      })
      // console.log(ganreSet);
      setDataTrack(['По умолчанию', 'Сначала старые', 'Сначала новые'])
    }
  }, [data])
  // const filtredDataRedux = useSelector((state) => state.tracks.filteredTracks);
  const filterCount = useSelector((state) => state.tracks.filters)
  const $isAuthorClick = useSelector((state) => state.tracks.$isAuthorClick)
  const $isGenreClick = useSelector((state) => state.tracks.$isGenreClick)
  const $isYearsClick = useSelector((state) => state.tracks.$isYearsClick)
  const countYears = useSelector((state) => state.tracks.countYears)
  const filteredAuthorGenreYears = useSelector(
    (state) => state.tracks.filteredAuthorGenreYears
  )
  const handleFilter = ({ nameFilter, valueFilter }) => {
    dispatch(setFilters({ nameFilter, valueFilter }))
  }
  const handlerClearFiltered = () => {
    dispatch(clearTheFilter())
  }
  useEffect(() => {
    console.log(filteredAuthorGenreYears)
  }, [filteredAuthorGenreYears])
  return (
    <>
      <S.CenterBlockFilterTitle>Искать по:</S.CenterBlockFilterTitle>
      {filterCount.author.length > 0 && (
          <S.filterCountAuthor >
            {filterCount.author.length}
          </S.filterCountAuthor>
        )}
      <S.FilterButtonList>
        {filter ? (
          <>
            <S.FilterButton className="_btn-text" onClick={showFilterAuthor}>
              исполнителю
            <S.List onClick={(e) => e.stopPropagation()}>
              {data.map((item) => {
                return (
                  <S.ListEl
                    $isAuthorClick={$isAuthorClick}
                    $isAuthorSelector={filterCount.author.includes(item.author)}
                    key={item.id}
                    onClick={() => {
                      handleFilter({
                        nameFilter: 'author',
                        valueFilter: item.author,
                      })
                    }}
                  >
                    {item.author}
                  </S.ListEl>
                )
              })}
            </S.List>
            </S.FilterButton>
          </>
        ) : (
          <>
            <S.FilterButton className="_btn-text" onClick={showFilterAuthor}>
              исполнителю
            </S.FilterButton>
          </>
        )}
        {filterCount.genre.length > 0 && (
          <S.filterCountGenre >
            {filterCount.genre.length}
          </S.filterCountGenre>
        )}

        {filterGenre ? (
          <>
            <S.FilterButton className="_btn-text" onClick={showFilterGenre}>
              жанру
            <S.List onClick={(e) => e.stopPropagation()}>
              {genre.map((item) => {
                return (
                  <S.ListEl
                    $isGenreClick={$isGenreClick}
                    $isGenreSelector={filterCount.genre.includes(item)}
                    key={item}
                    onClick={() => {
                      handleFilter({
                        nameFilter: 'genre',
                        valueFilter: item,
                      })
                    }}
                  >
                    {item}
                  </S.ListEl>
                )
              })}
            </S.List>
            </S.FilterButton>
          </>
        ) : (
          <>
            <S.FilterButton className="_btn-text" onClick={showFilterGenre}>
              жанру
            </S.FilterButton>
          </>
        )}

        {countYears === 1 && (
          <S.filterCountYears>{countYears}</S.filterCountYears>
        )}

        {filterYears ? (
          <>
            <S.FilterButton className="_btn-text" onClick={showFilterYears}>
            {filterCount.years}
            
            <S.List onClick={(e) => e.stopPropagation()}>
              {dataTrack.map((item) => {
                return (
                  <S.ListEl
                  $isYearsClick={$isYearsClick}
                  $isYearsSelector={filterCount.years.includes(item)}
                    onClick={() => {
                      handleFilter({
                        nameFilter: 'years',
                        valueFilter: item,
                      })
                    }}
                    key={item.id}
                  >
                    {item}
                  </S.ListEl>
                )
              })}
            </S.List>
            </S.FilterButton>
          </>
        ) : (
          <>
            <S.FilterButton className="_btn-text" onClick={showFilterYears}>
            {filterCount.years}
            </S.FilterButton>
          </>
        )}
        <S.clearFilteredButton onClick={() => handlerClearFiltered()}>
          Очистить фильтр
        </S.clearFilteredButton>
      </S.FilterButtonList>
      </> )
}


export default FilterBy
