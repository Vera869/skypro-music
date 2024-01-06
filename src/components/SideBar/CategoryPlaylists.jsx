import * as S from './StyledSideBar.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { arrayCategorys } from './ArrayCategory.jsx'

export const CategoryPlayLists = ({ isLoading }) => {
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
