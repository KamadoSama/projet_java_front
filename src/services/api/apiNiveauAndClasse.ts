import WebClient from '../../config/axios';

const URL = 'http://localhost:8089/'
export const apiNiveauAndClasse = { 
   fetchLocations: async () => { 
      return await WebClient.get(URL) 
        .then((res) => JSON.stringify(res.data) ) 
        .catch((err) => console.log(err)) 
    } ,

    getClasse:async()=>{
        return await WebClient.get(`${URL}classes`)
    },
    getNiveau:async()=>{
        return await WebClient.get(`${URL}niveau`)
    },
}