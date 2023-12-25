const host = 'https://skypro-music-api.skyeng.tech/catalog';


export async function getAllTracks(){
   const response = await fetch(`${host}/track/all/`);
   const data = response.json();
   if(!response.ok) {
      throw new Error("Произошла ошибка")
   }
   return data
}

// export async function getTrackId(){
//    const response = await fetch(`${host}/track/<id>`);
//    const data = response.json();
//     if(!response.ok) {
//      throw mew Error("Произошла ошибка")
//   }
//    return data
// }