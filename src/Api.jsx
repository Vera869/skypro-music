const host = 'https://skypro-music-api.skyeng.tech/';


export async function getAllTracks(){
   const response = await fetch(`${host}catalog/track/all/`);
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();

   return data
}

export async function registrUser({ email, password }){
   const response = await fetch(`${host}user/signup/`, {
      method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: email,
         }),
            headers: {
              "content-type": "application/json",
            },
   }) ;
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();
   console.log(data);
   return data
}
export async function loginUser({ email, password }) {
   const response = await fetch(`${host}/user/login/`, {
     method: "POST",
     body: JSON.stringify({
       email: email,
       password: password,
     }),
     headers: {
       "content-type": "application/json",
     },
   });
   if(!response.ok) {
      throw new Error("Произошла ошибка");
   } 
   const data = response.json();
   console.log(data);
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

