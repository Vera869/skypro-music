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
   if (response.status === 400) {
    const data = await response.json()
    const error = data.email && data.email[0] || data.username && data.username[0] || data.password && data.password[0]
      throw new Error(error);
    } else if (response.status === 500) {
      throw new Error("Внутренняя ошибка сервера");
    }
   const user = response.json();
   console.log(user);
   return user
}
export async function loginUser({ email, password }) {
   const response = await fetch(`${host}user/login/`, {
     method: "POST",
     body: JSON.stringify({
       email: email,
       password: password,
     }),
     headers: {
       "content-type": "application/json",
     },
   });
    if (response.status === 400) {
      throw new Error("Запрос составлен некорректно");
    } else if (response.status === 401) {
      throw new Error("Пользователь с таким email или паролем не найден");
    } else if (response.status === 500) {
      throw new Error("Ошибка сервера");
    }
   const user = response.json();
   return user
 }
 export async function getToken ({ email, password }) {
   const response = await fetch(`${host}user/token/`, {
     method: "POST",
     body: JSON.stringify({
       email: email,
       password: password,
     }),
     headers: {
       "content-type": "application/json",
     },
   })
   return response.json();
   }
export async function refrashToken ({refresh}) {
  console.log("обновление токена");
      const response = await fetch(`${host}user/token/refresh/`, {
        method: "POST",
        body: JSON.stringify({
         refresh
        }),
        headers: {
          "content-type": "application/json",
        },
      })
      return response.json();
      }

// Api для работы через slice
export async function getFavTracks() {
  return fetch(
      `${host}catalog/track/favorite/all/`,
      {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
      },
  )
}

export async function getPlaylist(id) {
  return fetch(
      `${host}catalog/selection/${id}/`,
      {
          method: 'GET',
      },
  )
      .then((response) => {
          return response.json()
      })
      .then((response) => {
          return response.items
      })
}

export async function getTrack(id) {
  return fetch(`${host}catalog/track/${id}`, {
      method: 'GET',
  }).then((response) => {
      return response.json()
  })
}

export async function setLike(id) {
  return fetch(
      `${host}catalog/track/${id}/favorite/`,
      {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
      },
  )
}

export async function removeLike(id) {
  return fetch(
      `${host}catalog/track/${id}/favorite/`,
      {
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
      },
  )
}
