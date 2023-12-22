//import {arrayCategorys} from '../../components/SideBar/ArrayCategory.jsx'
import { useParams } from "react-router-dom";
export const PlayListCategory = ({arrayCategorys}) => {

   const params = useParams();
   console.log(arrayCategorys);
   
   const arrayCategory = arrayCategorys.find((arrayCategory) => arrayCategory.id === Number(params.id));
   return (
      <div className="container new-page">
         <img src={"/"+arrayCategory.src} alt={arrayCategory.alt}/>
         <h1>
           Плейлист  {arrayCategory.alt}
         </h1>
      </div>
   )
}

