import * as S from "./StyledSideBar.js"
import {useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from 'react-router-dom'
import {arrayCategorys} from  './ArrayCategory.jsx'

export const CategoryPlayLists = () => {

   const [isLoading, setIsLoading] = useState(true)
   useEffect(() => {
       setTimeout(() => {
           setIsLoading(false)
       }, 3000)
   }, [])

   return (
      <>
         {arrayCategorys.map((arrayCategory) => (
            <S.SideBarItem key={arrayCategory.id} >
              {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<> <S.SideBarLink to={`category/${arrayCategory.id}`}>
                                          <S.SideBarImage
                                             src={arrayCategory.src}
                                             alt={arrayCategory.alt}
                                          />
                                       </S.SideBarLink>
                                   </>)}
            </S.SideBarItem>
         ))}
      </>
   )
}