import {useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from "../SideBar/StyledSideBar.js"

function SideBar () {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 5000)
  }, [])
   return (
      <S.MineSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Vera.Buganova</S.SideBarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList>
          <S.SideBarItem>
            {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<><S.SideBarLink href="#">
                              <S.SideBarImage
                                src="img/playlist01.png"
                                alt="day's playlist"
                              />
                          </S.SideBarLink></>)}
          </S.SideBarItem>
          <S.SideBarItem>
          {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<><S.SideBarLink href="#">
                            <S.SideBarImage
                              src="img/playlist02.png"
                              alt="day's playlist"
                            />
                          </S.SideBarLink></>)}
          </S.SideBarItem>
          <S.SideBarItem>
          {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<><S.SideBarLink href="#">
                                <S.SideBarImage
                                  src="img/playlist03.png"
                                  alt="day's playlist"
                                />
                              </S.SideBarLink></>)}
          </S.SideBarItem>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MineSideBar>
   )
}
export default SideBar