export async function getAllTracks(){
   const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");
   const data = response.json();
   return data
}