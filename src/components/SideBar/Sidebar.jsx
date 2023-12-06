import {useEffect, useState } from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as St from "../SideBar/StyledSideBar.js"

function SideBar () {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 5000)
  }, [])
   return (
      <St.MineSideBar className="main__sidebar sidebar">
      <St.SideBarPersonal>
        <St.SideBarPersonalName>Vera.Buganova</St.SideBarPersonalName>
        <St.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </St.SideBarIcon>
      </St.SideBarPersonal>
      <St.SideBarBlock>
        <St.SideBarList>
          <St.SideBarItem>
            {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<><St.SideBarLink href="#">
                              <St.SideBarImage
                                src="img/playlist01.png"
                                alt="day's playlist"
                              />
                          </St.SideBarLink></>)}
          </St.SideBarItem>
          <St.SideBarItem>
          {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<><St.SideBarLink href="#">
                            <St.SideBarImage
                              src="img/playlist02.png"
                              alt="day's playlist"
                            />
                          </St.SideBarLink></>)}
          </St.SideBarItem>
          <St.SideBarItem>
          {isLoading ? (<Skeleton
                            width={250}
                            height={150}
                            baseColor="#202020"
                            highlightColor="#444"
                         />) : (<><St.SideBarLink href="#">
                                <St.SideBarImage
                                  src="img/playlist03.png"
                                  alt="day's playlist"
                                />
                              </St.SideBarLink></>)}
          </St.SideBarItem>
        </St.SideBarList>
      </St.SideBarBlock>
    </St.MineSideBar>
   )
}
export default SideBar