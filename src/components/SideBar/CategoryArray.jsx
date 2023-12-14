import * as S from "../SideBar/StyledSideBar.js"
import {useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from 'react-router-dom'

export const CategoryPlayLists = () => {
   const arrayCategorys = [
      {
         id: 1,
         src: "img/playlist01.png",
         alt: "day's playlist",
      },
      {
         id: 2,
         src: "img/playlist02.png",
         alt: "100 hits",
      },
      {
         id: 3,
         src: "img/playlist03.png",
         alt: "Indi",
      }
   ];

   const [isLoading, setIsLoading] = useState(true)
   useEffect(() => {
       setTimeout(() => {
           setIsLoading(false)
       }, 5000)
   }, [])

   return (
      <>
         {arrayCategorys.map((arrayCategory) => (
            <S.SideBarItem key='arrayCategory.id' >
              {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<> <Link to={'category/${arrayCategory.id}'}>
                                       <S.SideBarLink>
                                          <S.SideBarImage
                                             src={arrayCategory.src}
                                             alt={arrayCategory.alt}
                                          />
                                       </S.SideBarLink>
                                   </Link></>)}
            </S.SideBarItem>
         ))}
      </>
   )
}