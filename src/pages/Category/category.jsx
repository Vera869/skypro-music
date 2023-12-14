import {arrayCategorys} from '../../components/SideBar/ArrayCategory'
import { useParams } from "react-router-dom";

export const PlayListCategory = ({arrayCategorys}) => {
   const params = useParams();
   
   const arrayCategory = arrayCategorys.find((arrayCategory) => arrayCategory.id === Number(params.id));
   return (
      <div>
         <img src={arrayCategory.src} alt={arrayCategory.alt}/>
         <h1>
           Плейлист дня
         </h1>
      </div>
   )
}

