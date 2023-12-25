const host = 'https://skypro-music-api.skyeng.tech/catalog';


export async function getAllTracks(){
   const response = await fetch(`${host}/track/all/`);
   const data = response.json();
   return data
}

// export async function getTrackId(){
//    const response = await fetch(`${host}/track/<id>`);
//    const data = response.json();
//    return data
// }