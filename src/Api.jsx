const host = 'https://skypro-music-api.skyeng.tech/catalog';


export async function getAllTracks(){
   const response = await fetch(`${host}/track/all/`);
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();

   return data
}

export async function getUse(){
   const response = await fetch(`${host}/track/all/`);
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();

   return data
}

// export async function getTrackId(){
//    const response = await fetch(`${host}/track/<id>`);
//    const data = response.json();
//     if(!response.ok) {
//      throw new Error("Произошла ошибка")
//   }
//    return data
// }

