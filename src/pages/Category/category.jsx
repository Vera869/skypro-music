import {CategoryPlayLists} from '../../components/SideBar/CategoryArray'
import { useParams } from "react-router-dom";

export const PlayListCategory = ({CategoryPlayLists}) => {
   const params = useParams();
   const CategoryPlayList = CategoryPlayLists.find((uCategoryPlayList) => CategoryPlayList.id === Number(params.id));
   return (
      <div>
         <img src={CategoryPlayList.src} alt={CategoryPlayList.alt}/>
         <h1>
           Плейлист дня
         </h1>
      </div>
   )
}

