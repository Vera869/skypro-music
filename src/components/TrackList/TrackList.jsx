import "./TrackList.css"
import {useEffect, useState } from "react"
import {arrayTracks} from "./ArrayTracks"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Tracks() {
   const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 5000)
  }, [])


   const trackItems = arrayTracks.map((track) => (
     <li key={track.id} className="playlist__item">
         <div className="playlist__track track">
               <div className="track__title">
                  <div className="track__title-image">
                     <svg className="track__title-svg" alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                     </svg>
                  </div>
                  <div className="track__title-text">
                     {isLoading ? (<Skeleton width={270}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                          />):(
                                             <a className="track__title-link" href="http://">
                                             {track.trackName}
                                             {track.remix ? (
                                             <span className="track__title-span">({track.remix})</span>
                                             ) : ("")}
                                          </a>)}
                  </div>
                  <div className="track__author col02">
                     {isLoading ? (<Skeleton
                                             width={270}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : (<a className="track__author-link" href="http://">
                                       {track.trackAuthor}
                                       </a>)}
                  </div>
                  <div className="track__album col03">
                     {isLoading ? (<Skeleton
                                             width={315}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : ( <a className="track__album-link" href="http://">
                                       {track.album}
                                       </a>)}
                  </div>
                  <div className="track__time col04">
                     {isLoading ? (<Skeleton
                                             width={60}
                                             baseColor="#202020"
                                             highlightColor="#444"
                                       />) : (<><svg className="track__time-svg" alt="time">
                                       <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                       </svg>
                                       <span className="track__time-text"> {track.trackTime}</span>
                                       </>)}
                  </div>
               </div>
         </div>
     </li>
   ));
 
   return <ul className="content__playlist playlist">{trackItems}</ul>;
 }
 export default Tracks