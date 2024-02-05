import * as S from './StyledSideBar.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { arrayCategorys } from './ArrayCategory.jsx'

// import { useGetCatalogSelectionQuery } from '../../Services/index.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { setPlaylists } from '../../Store/Slices/sliceTrack.js'

export const CategoryPlayLists = (
  {isLoading}
  ) => {
  // const dispatch = useDispatch()
  // const { data, isLoading, isError } = useGetCatalogSelectionQuery()
  // if (isError)
  //   return (
  //     <S.SideBarItem>
  //       К сожалению, при загрузке <br></br>
  //       произошла ошибка, <br></br>
  //       пожалуйста, попробуйте позже.
  //     </S.SideBarItem>
  //   )
  // useEffect(() => {
  //   dispatch(setPlaylists({ data }))
  // }, [])
  // console.log(data)
  // const arrayCategorys = useSelector((state) => state.tracks.playlists)

  
  return (
    <>
      {arrayCategorys.map((arrayCategory) => (
        <S.SideBarItem key={arrayCategory.id}>
          {isLoading ? (
            <Skeleton
              width={250}
              height={150}
              baseColor="#202020"
              highlightColor="#444"
            />
          ) : (
            <>
              {' '}
              <S.SideBarLink to={`category/${arrayCategory.id}`}>
                <S.SideBarImage
                  src={arrayCategory.src}
                  alt={arrayCategory.alt}
                />
              </S.SideBarLink>
            </>
          )}
        </S.SideBarItem>
      ))}
    </>
  )
}
